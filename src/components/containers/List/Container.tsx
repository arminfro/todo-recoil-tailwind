import { PropsWithChildren } from 'react';

export default function List({ children }: PropsWithChildren) {
  return (
    <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
      {children}
    </ul>
  );
}
