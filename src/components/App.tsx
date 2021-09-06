import { ReactElement } from 'react';
import List from 'src/features/todo/components/List';
import AppContext from './AppContext';

export default function App(): ReactElement {
  return (
    <AppContext>
      {(todos) => (
        <div className="container w-screen px-0 py-2 bg-gray-100">
          <div className="max-w-4xl p-6 m-8 mx-auto bg-white shadow-md md:flex-row rounded-xl space-x-4">
            <h2 className="italic text-center text-indigo-600 underline">
              harum-quod-distinctio
            </h2>
            <h5 className="text-center text-indigo-400">
              Ratione veniam incidunt pariatur eaque fugiat
            </h5>
            <List todos={todos} />
          </div>
        </div>
      )}
    </AppContext>
  );
}
