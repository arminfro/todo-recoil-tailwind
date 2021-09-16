import { ReactElement } from 'react';
import { SWRConfig } from 'swr';
import { todoApi } from '@/features/todo/todo.api';
import { Todo } from '@/features/todo/todo.type';

export async function swrApi(path: string): Promise<Todo[]> {
  return todoApi.getAll(path).then((response) => response.data);
}

export const swrOptions = {
  fetcher: (url: string): Promise<Todo[]> => swrApi(url),
  suspense: true,
};

interface Props {
  children: ReactElement | ReactElement[];
}

export function SWRProvider({ children }: Props): ReactElement {
  return <SWRConfig value={swrOptions}>{children}</SWRConfig>;
}
