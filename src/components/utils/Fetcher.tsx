import {ReactElement, Suspense} from 'react';
import useSWR from 'swr';

import ErrorBoundary from './ErrorBoundary';
import Exception from './Exception';
import LoadingSpinner from './LoadingSpinner';

interface FetchProps<T> {
  children: (data: T) => ReactElement;
  url: string;
}

function Fetcher<T>({children, url}: FetchProps<T>): ReactElement {
  const {data} = useSWR<T>(url);
  if (data) {
    return (
      <>{children(data)}</>
    );
  }
  return <>no data</>
}

export default function Fetch<T>(props: FetchProps<T>): ReactElement {
  return (
    <ErrorBoundary fallback={(e) => <Exception error={e} />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Fetcher<T> {...props} />
      </Suspense>
    </ErrorBoundary >
  );
}
