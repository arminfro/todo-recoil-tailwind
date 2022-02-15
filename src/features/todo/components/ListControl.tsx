import Control from '@/components/app-control';
import Modal from '@/components/containers/Modal';
import Create from '@/features/todo/components/Create';
import { Filter, Todo, TodoCreate } from '@/features/todo/todo.type';
import { nextThemeValue } from '@/hooks/useTheme';
import useThemeProvider from '@/hooks/useThemeProvider';
import { upperFirst } from 'lodash';
import { ReactElement, useCallback, useState } from 'react';
import {
  AiFillCheckCircle,
  AiFillFolderOpen,
  AiFillPlusCircle,
  AiOutlineApartment,
  AiOutlineCheckCircle,
  AiOutlineFilter,
  AiOutlineFolderOpen,
  AiOutlinePlusCircle,
  AiOutlineSetting,
} from 'react-icons/ai';
import {
  MdClear,
  MdDarkMode,
  MdLightbulb,
  MdLightbulbOutline,
  MdOutlineDarkMode,
  MdWorkOutline,
} from 'react-icons/md';
import { SetterOrUpdater } from 'recoil';

interface Props {
  onAdd: (todo: TodoCreate) => Promise<void | Todo>;
  onClearCompleted: () => void;
  onCompleteAll: () => void;
  setFilter: SetterOrUpdater<Filter>;
}

export default function ListControl({
  onAdd,
  onCompleteAll,
  onClearCompleted,
  setFilter,
}: Props): ReactElement {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const onOpenModal = useCallback(
    () => setShowCreateModal((showCreateModal) => !showCreateModal),
    [],
  );

  const [theme, toggleTheme] = useThemeProvider();

  const onFinish = useCallback(() => {
    setShowCreateModal(false);
  }, [setShowCreateModal]);

  return (
    <>
      <Control.Groups>
        <Control.Group Icon={AiOutlineFilter} name="Filter">
          <Control.Action
            onClick={useCallback(() => {
              setFilter('completed');
            }, [setFilter])}
            name="Completed"
            Icon={AiOutlineCheckCircle}
            IconHover={AiFillCheckCircle}
          />
          <Control.Action
            onClick={useCallback(() => {
              setFilter('uncompleted');
            }, [setFilter])}
            name="Uncompleted"
            Icon={AiOutlineFolderOpen}
            IconHover={AiFillFolderOpen}
          />
          <Control.Action
            onClick={useCallback(() => {
              setFilter('all');
            }, [setFilter])}
            name="All"
            Icon={AiOutlineApartment}
            IconHover={AiOutlineApartment}
          />
        </Control.Group>
        <Control.Group Icon={MdWorkOutline} name="Action">
          <Control.Action
            onClick={onOpenModal}
            name="Add new"
            Icon={AiOutlinePlusCircle}
            IconHover={AiFillPlusCircle}
          />
          <Control.Action
            onClick={onCompleteAll}
            name="Complete all"
            Icon={AiOutlineCheckCircle}
            IconHover={AiFillCheckCircle}
          />
          <Control.Action
            onClick={onClearCompleted}
            name="Clear completed"
            Icon={MdClear}
          />
        </Control.Group>
        <Control.Group Icon={AiOutlineSetting} name="Setting">
          <Control.Action
            onClick={toggleTheme}
            name={`Theme ${upperFirst(nextThemeValue(theme))}`}
            Icon={theme === 'dark' ? MdLightbulbOutline : MdOutlineDarkMode}
            IconHover={theme === 'dark' ? MdLightbulb : MdDarkMode}
          />
        </Control.Group>
      </Control.Groups>
      <Modal isOpen={showCreateModal} onClose={onFinish} title="Create todo">
        <Create onAdd={onAdd} onFinish={onFinish} />
      </Modal>
    </>
  );
}
