import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { todosState } from '../todo.atom';
import { Todo } from '../todo.type';

interface UseTodos {
  get: {
    all: () => Todo[];
    one: (id: number) => Todo | undefined;
    completed: () => Todo[];
    uncompleted: () => Todo[];
  };
  set: {
    generic: SetterOrUpdater<Todo[]>;
    add: (todo: Todo) => void;
    complete: (id: number) => void;
    uncomplete: (id: number) => void;
    delete: (id: number) => void;
    update: (todo: Todo) => void;
    duplicate: (id: number) => void;
  };
}

export function useTodos(initialValues?: Todo[]): UseTodos {
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    if (initialValues) {
      console.log('calling setTodos');
      setTodos(initialValues);
    }
  }, [initialValues, setTodos]);

  return {
    get: {
      all: () => todos,
      one: (id: number) => todos.find((todo) => todo.id === id),
      completed: () => todos.filter((todo) => todo.completed),
      uncompleted: () => todos.filter((todo) => !todo.completed),
    },
    set: {
      generic: setTodos,
      add: (todo: Todo) => {
        setTodos((todos) => [...todos, todo]);
      },
      complete: (id: number) => {
        setTodos((todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: true } : todo,
          ),
        );
      },
      uncomplete: (id: number) => {
        setTodos((todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: false } : todo,
          ),
        );
      },
      delete: (id: number) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      },
      update: (todo: Todo) => {
        setTodos((todos) =>
          todos.map((todo_) =>
            todo_.id === todo.id ? { ...todo_, ...todo } : todo_,
          ),
        );
      },
      duplicate: (id: number) => {
        setTodos((todos) => {
          const todo = todos.find((todo) => todo.id === id);
          if (todo) {
            return [...todos, { ...todo, id: Math.random() }];
          } else {
            return todos;
          }
        });
      },
    },
  };
}
