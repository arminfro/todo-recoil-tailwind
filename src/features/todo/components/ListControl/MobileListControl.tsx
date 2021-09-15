import { ReactElement } from 'react';
import {
  AiOutlineApartment,
  AiOutlineCheck,
  AiOutlineFolderOpen,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { ListControlProps } from './Index';

export default function MobileListControl({
  showAll,
  showCompleted,
  showUncompleted,
  onOpenModal,
}: ListControlProps): ReactElement {
  const buttonClasses = 'flex-1 w-full py-2 pl-2 text-sm text-sm';
  const iconClasses = 'w-5 h-5 text-indigo-700 m-auto';
  return (
    <div className="fixed bottom-0 z-10 flex w-full bg-white">
      <button
        aria-hidden="true"
        className={buttonClasses}
        onClick={showCompleted}
      >
        <AiOutlineCheck size={20} className={iconClasses} />
        Completed
      </button>
      <button className={buttonClasses} onClick={showUncompleted}>
        <AiOutlineFolderOpen className={iconClasses} />
        Uncompleted
      </button>
      <button className={buttonClasses} onClick={showAll}>
        <AiOutlineApartment className={iconClasses} />
        All
      </button>
      <button className={buttonClasses} onClick={onOpenModal}>
        <AiOutlinePlusCircle className={iconClasses} />
        Create
      </button>
    </div>
  );
}
