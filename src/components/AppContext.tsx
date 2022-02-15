import Fetch from '@/components/utils/Fetcher';
import ThemeProvider from '@/context/ThemeProvider';
import { Todo } from '@/features/todo/todo.type';
import { SWRProvider } from '@/lib/swr';
import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: (appProps: Todo[]) => ReactElement | ReactElement[];
}

export default function AppContext({ children }: Props): ReactElement {
  return (
    <SWRProvider>
      <ThemeProvider>
        <RecoilRoot>
          <Fetch<Todo[]> url="/todos">
            {(todos) => <>{children(todos)}</>}
          </Fetch>
        </RecoilRoot>
      </ThemeProvider>
    </SWRProvider>
  );
}
