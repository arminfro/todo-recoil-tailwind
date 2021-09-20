import { ReactElement, useMemo } from 'react';

export default function LoadingSpinner(): ReactElement {
  const style = useMemo(() => ({ borderTopColor: 'transparent' }), []);

  return (
    <div>
      <div
        style={style}
        className="w-32 h-32 mx-auto mt-32 border-4 border-indigo-700 border-dotted rounded-full dark:border-indigo-400 animate-spin"
      />
      <div className="relative mx-auto font-light text-center bg-transparent -top-16 dark:text-indigo-200">
        Loading
      </div>
    </div>
  );
}
