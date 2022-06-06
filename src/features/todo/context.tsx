import { createContext, ReactElement, useContext } from 'react';
import { UseTodos, useTodos } from './hooks/useTodos';
import { Todo } from './todo.type';

const TodoContext = createContext({} as UseTodos);

export const useTodoContext = () => useContext(TodoContext);

interface Props {
  children: ReactElement | ReactElement[];
  todos: Todo[];
}

export function TodoContextProvider({ children, todos }: Props) {
  return (
    <TodoContext.Provider value={useTodos(todos)}>
      {children}
    </TodoContext.Provider>
  );
}
