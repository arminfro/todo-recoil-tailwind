import { ReactElement } from 'react';
import AppContext from './AppContext';
import Fetch from './utils/Fetcher';

export default function MyToggle(): ReactElement {
  return (
    <AppContext>
      <div className="container bg-gray-100">
        <Fetch url="/">
          {(_data) => (
            <div className="flex max-w-sm p-6 m-8 mx-auto bg-white shadow-md rounded-xl space-x-4">
              <div>
                <div className="text-xl font-medium text-black">
                  Tailwind Css
                </div>
                <p className="text-gray-500">works!</p>
              </div>
            </div>
          )}
        </Fetch>
      </div>
    </AppContext>
  );
}
