import { ReactElement, useMemo } from 'react';

export default function LoadingSpinner(): ReactElement {
  const style = useMemo(() => ({ borderTopColor: 'transparent' }), []);

  console.log('LoadingSpinner!!');

  return (
    <div className="py-4 mt-32 h-34">
      <div
        style={style}
        className="w-16 h-16 mx-auto border-2 border-indigo-700 border-dotted rounded-full dark:border-indigo-400 animate-spin"
      />
      <div className="pt-1 relative font-light text-center bg-transparent dark:text-indigo-200">
        Loading
      </div>
    </div>
  );
}
