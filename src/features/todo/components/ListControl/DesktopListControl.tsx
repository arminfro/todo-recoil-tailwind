import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactElement } from 'react';
import { AiOutlineAlignRight } from 'react-icons/ai';
import ActionButton from '@/features/todo/components/ListControl/ActionButton';
import { ListControlProps } from '@/features/todo/components/ListControl/Index';

export default function DesktopListControl({
  showAll,
  showCompleted,
  showUncompleted,
  onOpenModal,
}: ListControlProps): ReactElement {
  const buttonClasses = (active: boolean) =>
    `flex w-full pl-2 py-2 text-sm ${active && 'underline'}`;

  const iconClasses = (active: boolean) =>
    `w-5 h-5 mr-2  ${active ? 'text-indigo-900' : 'text-indigo-700'}`;

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
                  <div>
                    <ActionButton
                      actionType="completed"
                      onClick={showCompleted}
                      active={active}
                      iconClasses={iconClasses(active)}
                      buttonClasses={buttonClasses(active)}
                    />
                  </div>
                )}
              </Menu.Item>
              <Menu.Item key="uncompleted">
                {({ active }) => (
                  <div>
                    <ActionButton
                      actionType="uncompleted"
                      onClick={showUncompleted}
                      active={active}
                      iconClasses={iconClasses(active)}
                      buttonClasses={buttonClasses(active)}
                    />
                  </div>
                )}
              </Menu.Item>
              <Menu.Item key="all">
                {({ active }) => (
                  <div>
                    <ActionButton
                      actionType="all"
                      onClick={showAll}
                      active={active}
                      iconClasses={iconClasses(active)}
                      buttonClasses={buttonClasses(active)}
                    />
                  </div>
                )}
              </Menu.Item>
              <Menu.Item key="create-new">
                {({ active }) => (
                  <div>
                    <ActionButton
                      actionType="create"
                      onClick={onOpenModal}
                      active={active}
                      iconClasses={iconClasses(active)}
                      buttonClasses={buttonClasses(active)}
                    />
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
