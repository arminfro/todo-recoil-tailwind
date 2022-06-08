import { ReactElement } from 'react';

import Fetch from '@/components/utils/Fetcher';
import { TodoContextProvider } from '@/features/todo/context';
import { Todo } from '@/features/todo/todo.type';

interface Props {
  children: ReactElement | ReactElement[];
}

export default function Context({ children }: Props): ReactElement {
  return (
    <Fetch<Todo[]> url="/todos">
      {(todos) => (
        <TodoContextProvider todos={todos}>{children}</TodoContextProvider>
      )}
    </Fetch>
  );
}
