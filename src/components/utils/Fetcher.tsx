import { ReactElement, Suspense, useCallback } from 'react';
import useSWR from 'swr';
import ErrorBoundary from '@/components/utils/ErrorBoundary';
import Exception from '@/components/utils/Exception';
import LoadingSpinner from '@/components/utils/LoadingSpinner';

interface FetchProps<T> {
  children: (data: T) => ReactElement;
  url: string;
}

function Fetcher<T>({ children, url }: FetchProps<T>): ReactElement {
  const { data } = useSWR<T>(url);
  if (data) {
    return <>{children(data)}</>;
  }
  return <></>;
}

export default function Fetch<T>(props: FetchProps<T>): ReactElement {
  const fallbackCallback = useCallback(
    (e: Error) => <Exception error={e} />,
    [],
  );

  return (
    <ErrorBoundary fallback={fallbackCallback}>
      <Suspense fallback={<LoadingSpinner />}>
        <Fetcher<T> {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
