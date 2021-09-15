import { ReactElement, useCallback, useState } from 'react';
import { useMedia } from 'react-use';
import useIsMobile from 'src/hooks/useIsMobile';
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
