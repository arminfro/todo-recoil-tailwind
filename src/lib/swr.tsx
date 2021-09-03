import axios, { AxiosPromise } from 'axios';
import { ReactElement } from 'react';
import { SWRConfig } from 'swr';

export async function swrApi(path: string): Promise<AxiosPromise> {
  return axios({
    method: 'GET',
    url: `${path}`,
  }).then((response) => {
    console.debug(path, response);
    return response.data;
  });
}

export const swrOptions = {
  fetcher: (url: string): Promise<AxiosPromise> => swrApi(url),
  suspense: true,
};

interface Props {
  children: ReactElement | ReactElement[];
}

export function SWRProvider({ children }: Props): ReactElement {
  return <SWRConfig value={swrOptions}>{children}</SWRConfig>;
}
