import { useMemo } from 'react';
import { Todo } from '../todo.type';
import { useTodos } from './useTodos';

export interface UseTodo {
  get: Todo | undefined;
  set: {
    toggleCompletion: () => void;
    delete: () => void;
    update: (title: string, description: string) => void;
    duplicate: () => void;
  };
}

export interface GuardedUseTodo extends UseTodo {
  get: Todo;
}

export function useTodo(id: number): UseTodo {
  const todos = useTodos();

  const useTodo = useMemo(
    () => ({
      get: todos.get.one(id),
      set: {
        toggleCompletion: () => todos.set.toggleCompletion(id),
        delete: () => todos.set.delete(id),
        update: (title: string, description: string) => {
          todos.set.update({ id, title, description });
        },
        duplicate: () => todos.set.duplicate(id),
      },
    }),
    [id, todos],
  );

  return useTodo;
}
