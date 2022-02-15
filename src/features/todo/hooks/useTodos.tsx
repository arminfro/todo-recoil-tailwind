import { filteredTodoListState, todosState } from '@/features/todo/todo.recoil';
import { todoApi } from '@/features/todo/todo.api';
import { Todo, TodoCreate } from '@/features/todo/todo.type';
import { useDebugValue, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

interface UseTodos {
  get: {
    filtered: Todo[];
    one: (id: number) => Todo | undefined;
  };
  set: {
    add: (todo: TodoCreate) => Promise<void | Todo>;
    toggleCompletion: (id: number) => void;
    completeAll: () => void;
    clearCompleted: () => void;
    delete: (id: number) => void;
    update: (todo: Partial<Todo>) => void;
    duplicate: (id: number) => Promise<void | Todo> | undefined;
  };
}

export function useTodos(initialValues?: Todo[]): UseTodos {
  const [todos, setTodos] = useRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodoListState);

  useDebugValue(todos);

  useEffect(() => {
    if (initialValues) {
      console.log('calling setTodos');
      setTodos(initialValues);
    }
  }, [initialValues, setTodos]);

  return {
    get: {
      filtered: filteredTodos,
      one: (id: number) => todos.find((todo) => todo.id === id),
    },
    set: {
      add: (todo: TodoCreate) =>
        todoApi.create(todo).then((response) => {
          setTodos((todos) => {
            return [...todos, response.data];
          });
        }),
      toggleCompletion: (id: number) => {
        const currentTodo = todos.find((todo_) => todo_.id === id);
        if (currentTodo) {
          todoApi.update({ ...currentTodo, completed: !currentTodo.completed });
        }
        setTodos((todos) =>
          todos.map((todo_) =>
            todo_.id === id ? { ...todo_, completed: !todo_.completed } : todo_,
          ),
        );
      },
      completeAll: () => {
        setTodos((todos) =>
          todos.map((todo_) => ({ ...todo_, completed: true })),
        );
      },
      clearCompleted: () => {
        setTodos((todos) => todos.filter((todo) => !todo.completed));
      },
      delete: (id: number) => {
        todoApi.delete(id);
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      },
      update: (todo: Partial<Todo>) => {
        const currentTodo = todos.find((todo_) => todo_.id === todo.id);
        if (currentTodo) {
          todoApi.update({ ...currentTodo, ...todo });
        }
        setTodos((todos) =>
          todos.map((todo_) =>
            todo_.id === todo.id ? { ...todo_, ...todo } : todo_,
          ),
        );
      },
      duplicate: (id: number) => {
        const todo = todos.find((todo) => todo.id === id);
        if (todo) {
          return todoApi.create(todo).then((response) =>
            setTodos((todos) => {
              console.log('about to duplicate', todo);
              if (todo) {
                return [...todos, response.data];
              } else {
                return todos;
              }
            }),
          );
        }
      },
    },
  };
}
