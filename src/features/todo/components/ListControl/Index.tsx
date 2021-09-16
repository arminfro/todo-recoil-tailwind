import { ReactElement, useCallback, useState } from 'react';
import useIsMobile from 'src/hooks/useIsMobile';
import Create from '@/features/todo/components/Create';
import DesktopListControl from '@/features/todo/components/ListControl/DesktopListControl';
import MobileListControl from '@/features/todo/components/ListControl/MobileListControl';
import { Todo, TodoCreate } from '@/features/todo/todo.type';

interface Props {
  showAll: () => void;
  showCompleted: () => void;
  showUncompleted: () => void;
  onAdd: (todo: TodoCreate) => Promise<void | Todo>;
}

export interface ListControlProps extends Props {
  onOpenModal: () => void;
}

export default function MobileSwitch(props: Props): ReactElement {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const onOpenModal = useCallback(
    () => setShowCreateModal((showCreateModal) => !showCreateModal),
    [],
  );

  return (
    <>
      {useIsMobile() ? (
        <div className="mt-14">
          <MobileListControl {...props} onOpenModal={onOpenModal} />
        </div>
      ) : (
        <DesktopListControl {...props} onOpenModal={onOpenModal} />
      )}
      <Create
        onAdd={props.onAdd}
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
      />
    </>
  );
}
