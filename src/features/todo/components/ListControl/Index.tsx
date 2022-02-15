import Control from '@/components/app-control';
import Create from '@/features/todo/components/Create';
import { Todo, TodoCreate } from '@/features/todo/todo.type';
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
  AiOutlineFolderOpen,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import {
  MdDarkMode,
  MdLightbulb,
  MdLightbulbOutline,
  MdOutlineDarkMode,
} from 'react-icons/md';

interface Props {
  showAll: () => void;
  showCompleted: () => void;
  showUncompleted: () => void;
  onAdd: (todo: TodoCreate) => Promise<void | Todo>;
}

export interface ListControlProps extends Props {
  onOpenModal: () => void;
}

export default function ListControl({
  showAll,
  showCompleted,
  showUncompleted,
  onAdd,
}: Props): ReactElement {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const onOpenModal = useCallback(
    () => setShowCreateModal((showCreateModal) => !showCreateModal),
    [],
  );

  const [theme, toggleTheme] = useThemeProvider();

  return (
    <>
      <Control.Groups>
        <Control.Group name="Filter">
          <Control.Action onClick={showCompleted} name="Completed">
            {({ active, className }) =>
              active ? (
                <AiFillCheckCircle className={className} />
              ) : (
                <AiOutlineCheckCircle className={className} />
              )
            }
          </Control.Action>
          <Control.Action onClick={showUncompleted} name="Uncompleted">
            {({ active, className }) =>
              active ? (
                <AiFillFolderOpen className={className} />
              ) : (
                <AiOutlineFolderOpen className={className} />
              )
            }
          </Control.Action>
          <Control.Action onClick={showAll} name="All">
            {({ active, className }) =>
              active ? (
                <AiOutlineApartment className={className} />
              ) : (
                <AiOutlineApartment className={className} />
              )
            }
          </Control.Action>
        </Control.Group>
        <Control.Group name="Edit">
          <Control.Action onClick={onOpenModal} name="Add new">
            {({ active, className }) =>
              active ? (
                <AiFillPlusCircle className={className} />
              ) : (
                <AiOutlinePlusCircle className={className} />
              )
            }
          </Control.Action>
        </Control.Group>
        <Control.Group name="Settings">
          <Control.Action
            onClick={toggleTheme}
            name={`Theme ${upperFirst(nextThemeValue(theme))}`}
          >
            {({ active, className }) => (
              <>
                {theme === 'dark' ? (
                  active ? (
                    <MdLightbulb className={className} />
                  ) : (
                    <MdLightbulbOutline className={className} />
                  )
                ) : active ? (
                  <MdDarkMode className={className} />
                ) : (
                  <MdOutlineDarkMode className={className} />
                )}
              </>
            )}
          </Control.Action>
        </Control.Group>
      </Control.Groups>
      <Create
        onAdd={onAdd}
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
      />
    </>
  );
}
