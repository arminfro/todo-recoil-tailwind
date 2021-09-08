import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../todo.atom';
import { Todo } from '../todo.type';

export interface UseTodo {
  get: Todo | undefined;
  set: {
    toggleCompletion: () => void;
    delete: () => void;
    update: (title: string, description: string) => void;
  };
}

export interface GuardedUseTodo extends UseTodo {
  get: Todo;
}

export function useTodo(id: number): UseTodo {
  const [todos, setTodos] = useRecoilState(todosState);

  const useTodo = useMemo(
    () => ({
      get: todos.find((todo) => todo.id === id),
      set: {
        toggleCompletion: () => {
          setTodos((todos) =>
            todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
          );
        },
        delete: () => {
          setTodos((todos) => todos.filter((todo) => todo.id !== id));
        },
        update: (title: string, description: string) => {
          setTodos((todos) =>
            todos.map((todo) =>
              todo.id === id ? { ...todo, title, description } : todo,
            ),
          );
        },
      },
    }),
    [id, setTodos, todos],
  );

  return useTodo;
}
