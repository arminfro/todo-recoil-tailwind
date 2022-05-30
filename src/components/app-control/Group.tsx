import { Fragment, ReactElement } from 'react';

import useIsMobile from '@/hooks/useIsMobile';
import { Menu, Transition } from '@headlessui/react';
import { IconType } from 'react-icons';

interface Props {
  children: ReactElement | ReactElement[];
  Icon: IconType;
  name: string;
}

function DesktopControlGroup({ children, name }: Props) {
  return (
    <section className="pl-2 py-2 text-sm dark:text-indigo-200 text-indigo-700">
      <span>{name}</span>
      <div>{children}</div>
    </section>
  );
}

function MobileControlGroup({ children, name, Icon }: Props) {
  return (
    <>
      <Menu
        as="div"
        className="flex-1 w-full p-2 mx-1 text-lg dark:text-indigo-200 text-center border-t-2 rounded-t-md border-l-2 border-r-2 dark:border-indigo-200"
      >
        <div>
          <Menu.Button
            data-test-id="list-control-btn"
            className="text-indigo-900 dark:text-indigo-300"
          >
            <Icon className="inline" /> {name}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items className="absolute bottom-0 left-0 w-full z-20 text-indigo-700 m-auto dark:text-indigo-200 bg-white dark:bg-gray-700">
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default function Group(props: Props): ReactElement {
  const isMobile = useIsMobile();
  return isMobile ? (
    <MobileControlGroup {...props} />
  ) : (
    <DesktopControlGroup {...props} />
  );
}
