import ActionButton from '@/features/todo/components/ListControl/ActionButton';
import { ListControlProps } from '@/features/todo/components/ListControl/Index';
import { ReactElement } from 'react';

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
