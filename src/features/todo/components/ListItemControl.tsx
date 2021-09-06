/* eslint-disable react-perf/jsx-no-new-array-as-prop */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { Menu, Transition } from '@headlessui/react';
import {
  Dispatch,
  Fragment,
  ReactElement,
  SetStateAction,
  useCallback,
} from 'react';
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineRollback,
  AiOutlineSave,
  AiOutlineSetting,
  AiTwotoneSetting,
} from 'react-icons/ai';
import { useHover } from 'react-use';
import { Todo } from '../todo.type';

interface Props {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  todo: Todo;
}

export default function ListItemControl({
  isEdit,
  setIsEdit,
  todo,
}: Props): ReactElement {
  const buttonClasses = (active: boolean) =>
    `flex w-full pl-2 py-2 text-sm ${active && 'underline'}`;

  const iconClasses = (active: boolean) =>
    `w-5 h-5 mr-2  ${active ? 'text-indigo-600' : 'text-indigo-400'}`;

  const onClickDuplicate = useCallback(() => {
    // noop
  }, []);

  const onClickEdit = useCallback(
    () => setIsEdit((isEdit) => !isEdit),
    [setIsEdit],
  );

  return (
    <>
      <div className="absolute w-1/12 right-9 top-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            {
              useHover((hovered) => (
                <Menu.Button className="inline-flex justify-center p-1 m-2 text-sm font-medium text-indigo-500 active:text-white active:bg-indigo-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {hovered ? (
                    <AiTwotoneSetting size={18} />
                  ) : (
                    <AiOutlineSetting size={18} />
                  )}
                </Menu.Button>
              ))[0]
            }
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute top-0 w-40 mt-2 bg-white shadow-lg right-2 origin-top-right divide-y divide-blue-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              style={{ zIndex: 1 }}
            >
              {isEdit ? (
                <>
                  <Menu.Item key="save">
                    {({ active }) => (
                      <button
                        aria-hidden="true"
                        className={buttonClasses(active)}
                        onClick={onClickEdit}
                      >
                        <AiOutlineSave className={iconClasses(active)} />
                        Save edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="edit">
                    {({ active }) => (
                      <button
                        aria-hidden="true"
                        className={buttonClasses(active)}
                        onClick={onClickEdit}
                      >
                        <AiOutlineClose className={iconClasses(active)} />
                        Cancel edit
                      </button>
                    )}
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="edit">
                    {({ active }) => (
                      <button
                        aria-hidden="true"
                        className={buttonClasses(active)}
                        onClick={onClickEdit}
                      >
                        <AiOutlineEdit className={iconClasses(active)} />
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="complete">
                    {({ active }) => (
                      <button className={buttonClasses(active)}>
                        {todo.completed ? (
                          <AiOutlineRollback className={iconClasses(active)} />
                        ) : (
                          <AiOutlineCheck className={iconClasses(active)} />
                        )}
                        {todo.completed ? 'Uncomplete' : 'Complete'}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="duplicate">
                    {({ active }) => (
                      <button
                        className={buttonClasses(active)}
                        onClick={onClickDuplicate}
                      >
                        <AiOutlineCopy className={iconClasses(active)} />
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="delete">
                    {({ active }) => (
                      <button className={buttonClasses(active)}>
                        <AiOutlineDelete className={iconClasses(active)} />
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
