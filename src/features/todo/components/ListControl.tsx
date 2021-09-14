import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactElement, useCallback, useState } from 'react';
import {
  AiOutlineAlignRight,
  AiOutlineApartment,
  AiOutlineCheck,
  AiOutlineFolderOpen,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { Todo } from '../todo.type';
import Create from './Create';

interface Props {
  onReset: () => void;
  onComplete: () => void;
  onUncomplete: () => void;
  onAdd: (todo: Todo) => void;
}

export default function ListControl({
  onAdd,
  onReset,
  onComplete,
  onUncomplete,
}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClasses = (active: boolean) =>
    `flex w-full pl-2 py-2 text-sm ${active && 'underline'}`;

  const iconClasses = (active: boolean) =>
    `w-5 h-5 mr-2  ${active ? 'text-indigo-900' : 'text-indigo-700'}`;

  const onAddNew = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <>
      <div className="absolute top-1 right-1 xl:top-4 xl:right-4 lg:top-3 lg:right-3 md:top-2 md:right-2">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              data-test-id="list-control-btn"
              className="text-indigo-900 hover:text-indigo-600"
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
            <Menu.Items className="absolute top-0 z-10 w-32 mt-2 bg-white shadow-lg md:w-34 lg:w-36 xl:w-38 right-2 origin-top-right divide-y divide-indigo-200 rounded-md">
              <Menu.Item key="completed">
                {({ active }) => (
                  <button
                    aria-hidden="true"
                    className={buttonClasses(active)}
                    onClick={onComplete}
                  >
                    <AiOutlineCheck size={20} className={iconClasses(active)} />
                    Completed
                  </button>
                )}
              </Menu.Item>
              <Menu.Item key="uncompleted">
                {({ active }) => (
                  <button
                    className={buttonClasses(active)}
                    onClick={onUncomplete}
                  >
                    <AiOutlineFolderOpen className={iconClasses(active)} />
                    Uncompleted
                  </button>
                )}
              </Menu.Item>
              <Menu.Item key="all">
                {({ active }) => (
                  <button className={buttonClasses(active)} onClick={onReset}>
                    <AiOutlineApartment className={iconClasses(active)} />
                    All
                  </button>
                )}
              </Menu.Item>
              <Menu.Item key="create-new">
                {({ active }) => (
                  <button className={buttonClasses(active)} onClick={onAddNew}>
                    <AiOutlinePlusCircle className={iconClasses(active)} />
                    Create
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Create onAdd={onAdd} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
