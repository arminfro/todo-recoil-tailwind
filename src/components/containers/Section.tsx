import { PropsWithChildren } from 'react';

export default function Section({ children }: PropsWithChildren) {
  return (
    <section className="p-10 w-full text-indigo-700 dark:text-indigo-200">
      {children}
    </section>
  );
}
