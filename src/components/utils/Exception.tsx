import { ReactElement } from 'react';

interface Props {
  error: Error;
}

export default function Exception({ error }: Props): ReactElement {
  return <>{error.message}</>;
}
