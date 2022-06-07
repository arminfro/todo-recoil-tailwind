import { ReactElement } from 'react';

interface Props {
  error: Error;
}

export default function Exception({ error }: Props): ReactElement {
  return <span className="dark:text-indigo-200">{error.message}</span>;
}
