import { ReactElement, useCallback, useState } from 'react';
import { useMedia } from 'react-use';
import { Todo, TodoCreate } from '../../todo.type';
import Create from '../Create';
import DesktopListControl from './DesktopListControl';
import MobileListControl from './MobileListControl';

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
  const isWide = useMedia('(min-width: 640px)');

  const [showCreateModal, setShowCreateModal] = useState(false);

  const onOpenModal = useCallback(
    () => setShowCreateModal((showCreateModal) => !showCreateModal),
    [],
  );

  return (
    <>
      {isWide ? (
        <DesktopListControl {...props} onOpenModal={onOpenModal} />
      ) : (
        <div className="mt-12">
          <MobileListControl {...props} onOpenModal={onOpenModal} />
        </div>
      )}
      <Create
        onAdd={props.onAdd}
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
      />
    </>
  );
}
