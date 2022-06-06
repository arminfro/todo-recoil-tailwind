import Fetch from '@/components/utils/Fetcher';
import ThemeProvider from '@/context/ThemeProvider';
import { TodoContextProvider } from '@/features/todo/context';
import { Todo } from '@/features/todo/todo.type';
import { SWRProvider } from '@/lib/swr';
import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: ReactElement | ReactElement[];
}

export default function AppContext({ children }: Props): ReactElement {
  return (
    <SWRProvider>
      <ThemeProvider>
        <RecoilRoot>
          <Fetch<Todo[]> url="/todos">
            {(todos) => (
              <TodoContextProvider todos={todos}>
                {children}
              </TodoContextProvider>
            )}
          </Fetch>
        </RecoilRoot>
      </ThemeProvider>
    </SWRProvider>
  );
}
