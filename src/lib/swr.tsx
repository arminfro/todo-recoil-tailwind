import axios, { AxiosPromise } from 'axios';
import { ReactElement } from 'react';
import { todoApi } from 'src/features/todo/todo.api';
import { Todo } from 'src/features/todo/todo.type';
import { SWRConfig } from 'swr';

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
