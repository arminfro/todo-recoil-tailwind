import { Fragment, ReactElement } from 'react';
import { AiOutlineAlignRight } from 'react-icons/ai';

import useIsMobile from '@/hooks/useIsMobile';
import { Menu, Transition } from '@headlessui/react';

interface Props {
  children: ReactElement | ReactElement[];
}

function DesktopControlGroups({ children }: Props) {
  return (
    <div className="absolute top-1 right-1 xl:top-4 xl:right-4 lg:top-3 lg:right-3 md:top-2 md:right-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            data-test-id="list-control-btn"
            className="text-indigo-900 hover:text-indigo-600 dark:text-indigo-300"
          >
            <AiOutlineAlignRight size={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-0 z-10 w-32 mt-2 bg-white shadow-lg dark:bg-gray-700 md:w-34 lg:w-36 xl:w-38 right-2 origin-top-right divide-y divide-indigo-200 rounded-md">
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function MobileControlGroups({ children }: Props) {
  return (
    <div className="fixed bottom-0 z-10 flex w-full bg-white dark:bg-gray-700">
      {children}
    </div>
  );
}

export default function Groups(props: Props): ReactElement {
  const isMobile = useIsMobile();
  return isMobile ? (
    <MobileControlGroups {...props} />
  ) : (
    <DesktopControlGroups {...props} />
  );
}
