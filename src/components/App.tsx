import { ReactElement } from 'react';
import List from 'src/features/todo/components/List';
import AppContext from './AppContext';

export default function App(): ReactElement {
  return (
    <AppContext>
      {(todos) => (
        <div className="container relative px-0 rounded-none shadow-xl sm:px-1 md:px-2 bg-gray-50 sm:mt-6 md:mt-10 lg:mt-14 xl:mt-20 2xl:mt-24 sm:rounded-xl">
          <List todos={todos} />
        </div>
      )}
    </AppContext>
  );
}
