import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';
import { Todo } from 'src/features/todo/types/todo';
import { SWRProvider } from 'src/lib/swr';
import Fetch from './utils/Fetcher';

interface Props {
  children: (appProps: Todo[]) => ReactElement | ReactElement[];
}

export default function AppContext({ children }: Props): ReactElement {
  return (
    <SWRProvider>
      <RecoilRoot>
        <Fetch<Todo[]> url="/todos">{(todos) => <>{children(todos)}</>}</Fetch>
      </RecoilRoot>
    </SWRProvider>
  );
}
