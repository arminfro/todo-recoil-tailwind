import Control from '@/components/app-control';
import { ListControlProps } from '@/features/todo/components/ListControl/Index';
import { nextThemeValue } from '@/hooks/useTheme';
import useThemeProvider from '@/hooks/useThemeProvider';
import { upperFirst } from 'lodash';
import { ReactElement } from 'react';
import {
  MdDarkMode,
  MdLightbulb,
  MdLightbulbOutline,
  MdOutlineDarkMode,
} from 'react-icons/md';
import {
  AiFillCheckCircle,
  AiFillFolderOpen,
  AiFillPlusCircle,
  AiOutlineApartment,
  AiOutlineCheckCircle,
  AiOutlineFolderOpen,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

export default function DesktopListControl({
  showAll,
  showCompleted,
  showUncompleted,
  onOpenModal,
}: ListControlProps): ReactElement {
  const [theme, toggleTheme] = useThemeProvider();
  return (
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
  );
}
