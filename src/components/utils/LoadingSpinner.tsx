import { ReactElement } from 'react';

export default function LoadingSpinner(): ReactElement {
  const style = () => ({ borderTopColor: 'transparent' });

  return (
    <div>
      <div
        style={style()}
        className="w-16 h-16 mx-auto border-4 border-blue-400 border-dashed rounded-full p-18 animate-spin"
      ></div>
    </div>
  );
}
