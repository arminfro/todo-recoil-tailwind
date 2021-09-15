import { ReactElement } from 'react';
import {
  AiFillCheckCircle,
  AiFillFolderOpen,
  AiFillPlusCircle,
  AiOutlineApartment,
  AiOutlineCheckCircle,
  AiOutlineFolderOpen,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

interface Props {
  actionType: 'completed' | 'uncompleted' | 'all' | 'create';
  active?: boolean;
  buttonClasses: string;
  iconClasses: string;
  onClick: () => void;
}

export default function ActionButton({
  actionType,
  active,
  iconClasses,
  buttonClasses,
  onClick,
}: Props): ReactElement {
  const types = {
    completed: {
      title: 'Completed',
      icons: {
        active: <AiFillCheckCircle className={iconClasses} />,
        inactive: <AiOutlineCheckCircle className={iconClasses} />,
      },
    },
    uncompleted: {
      title: 'Uncompleted',
      icons: {
        active: <AiFillFolderOpen className={iconClasses} />,
        inactive: <AiOutlineFolderOpen className={iconClasses} />,
      },
    },
    all: {
      title: 'All',
      icons: {
        active: <AiOutlineApartment className={iconClasses} />,
        inactive: <AiOutlineApartment className={iconClasses} />,
      },
    },
    create: {
      title: 'Create',
      icons: {
        active: <AiFillPlusCircle className={iconClasses} />,
        inactive: <AiOutlinePlusCircle className={iconClasses} />,
      },
    },
  };

  return (
    <button className={buttonClasses} onClick={onClick} aria-hidden="true">
      {types[actionType].icons[active ? 'active' : 'inactive']}
      {types[actionType].title}
    </button>
  );
}
