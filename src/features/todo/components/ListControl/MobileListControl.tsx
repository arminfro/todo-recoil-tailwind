import ActionButton from '@/features/todo/components/ListControl/ActionButton';
import { ListControlProps } from '@/features/todo/components/ListControl/Index';
import { ReactElement } from 'react';

export default function MobileListControl({
  showAll,
  showCompleted,
  showUncompleted,
  onOpenModal,
}: ListControlProps): ReactElement {
  const buttonClasses =
    'flex-1 w-full py-2 pl-2 text-sm text-sm dark:text-indigo-200';
  const iconClasses = 'w-5 h-5 text-indigo-700 m-auto dark:text-indigo-200';
  return (
    <div className="fixed bottom-0 z-10 flex w-full bg-white dark:bg-gray-700">
      <ActionButton
        actionType="completed"
        onClick={showCompleted}
        iconClasses={iconClasses}
        buttonClasses={buttonClasses}
      />
      <ActionButton
        actionType="uncompleted"
        onClick={showUncompleted}
        iconClasses={iconClasses}
        buttonClasses={buttonClasses}
      />
      <ActionButton
        actionType="all"
        onClick={showAll}
        iconClasses={iconClasses}
        buttonClasses={buttonClasses}
      />
      <ActionButton
        actionType="create"
        onClick={onOpenModal}
        iconClasses={iconClasses}
        buttonClasses={buttonClasses}
      />
    </div>
  );
}
