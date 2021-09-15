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
  AiOutlineCloseCircle,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineRollback,
  AiOutlineSave,
  AiOutlineSetting,
  AiTwotoneSetting,
} from 'react-icons/ai';
import { useHover } from 'react-use';
import { GuardedUseTodo } from '../hooks/useTodo';

interface Props {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onSaveEdit: () => void;
  todo: GuardedUseTodo;
  onDuplicate: () => void;
}

export default function ListItemControl({
  isEdit,
  setIsEdit,
  onSaveEdit,
  onDuplicate,
  todo,
}: Props): ReactElement {
  const buttonClasses = (active: boolean) =>
    `flex w-full pl-2 py-2 text-sm ${active && 'underline'}`;

  const iconClasses = (active: boolean) =>
    `w-5 h-5 mr-2  ${active ? 'text-indigo-900' : 'text-indigo-700'}`;

  const onCancelEdit = useCallback(() => setIsEdit(false), [setIsEdit]);
  const onClickEdit = useCallback(() => setIsEdit(true), [setIsEdit]);

  return (
    <>
      <div className="absolute top-0 right-0">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            {
              useHover((hovered) => (
                <Menu.Button
                  data-test-id="list-item-ctl-btn"
                  className="inline-flex justify-center p-1 m-2 text-sm text-indigo-800 active:text-white"
                >
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
            enter="transition ease-out duration-400"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={`z-10 absolute top-0 mt-2 bg-white shadow-lg w-28 lg:w-32 right-2 origin-top-right rounded-md divide-y divide-indigo-200`}
            >
              {isEdit ? (
                <>
                  <Menu.Item key="save">
                    {/* todo, render only when changes present */}
                    {({ active }) => (
                      <button
                        aria-hidden="true"
                        className={buttonClasses(active)}
                        onClick={onSaveEdit}
                      >
                        <AiOutlineSave className={iconClasses(active)} />
                        Save
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="edit">
                    {({ active }) => (
                      <button
                        aria-hidden="true"
                        className={buttonClasses(active)}
                        onClick={onCancelEdit}
                      >
                        <AiOutlineCloseCircle className={iconClasses(active)} />
                        Cancel
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
                      <button
                        className={buttonClasses(active)}
                        onClick={todo.set.toggleCompletion}
                      >
                        {todo.get.completed ? (
                          <AiOutlineRollback className={iconClasses(active)} />
                        ) : (
                          <AiOutlineCheck className={iconClasses(active)} />
                        )}
                        {todo.get.completed ? 'Uncomplete' : 'Complete'}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="duplicate">
                    {({ active }) => (
                      <button
                        className={buttonClasses(active)}
                        onClick={onDuplicate}
                      >
                        <AiOutlineCopy className={iconClasses(active)} />
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item key="delete">
                    {({ active }) => (
                      <button
                        className={buttonClasses(active)}
                        onClick={todo.set.delete}
                      >
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
