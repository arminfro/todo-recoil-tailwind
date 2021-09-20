import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';
import Fetch from '@/components/utils/Fetcher';
import { Todo } from '@/features/todo/todo.type';
import { SWRProvider } from '@/lib/swr';
import useTheme from '@/hooks/useTheme';

interface Props {
  children: (appProps: Todo[]) => ReactElement | ReactElement[];
}

export default function AppContext({ children }: Props): ReactElement {
  useTheme();

  return (
    <SWRProvider>
      <RecoilRoot>
        <Fetch<Todo[]> url="/todos">{(todos) => <>{children(todos)}</>}</Fetch>
      </RecoilRoot>
    </SWRProvider>
  );
}
