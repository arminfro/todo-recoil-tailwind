import Modal from '@/components/containers/Modal';
import Edit from '@/features/todo/components/Edit';
import { Todo, TodoCreate } from '@/features/todo/todo.type';
import {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

interface Props {
  showCreateModal: boolean;
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
  onAdd: (todo: TodoCreate) => Promise<void | Todo>;
}

export default function Create({
  onAdd,
  showCreateModal,
  setShowCreateModal,
}: Props): ReactElement {
  const [todo, setTodo] = useState({ title: '', description: '' });

  const onFinish = useCallback(() => {
    setShowCreateModal(false);
  }, [setShowCreateModal]);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onAdd(todo).then(onFinish);
    },
    [todo, onFinish, onAdd],
  );

  const commonClasses = 'block p-2 w-11/12';

  return (
    <Modal isOpen={showCreateModal} onClose={onFinish} title="Create todo">
      <form onSubmit={onSubmit}>
        <Edit
          label={<label className="block mr-4">Title</label>}
          onInputChange={useCallback((input) => {
            setTodo((todo) => ({ ...todo, title: input }));
          }, [])}
        >
          {(fieldProps) => (
            <input {...fieldProps} className={`${commonClasses}`} />
          )}
        </Edit>

        <Edit
          label={<label className="block mr-4">Content</label>}
          onInputChange={useCallback((input) => {
            setTodo((todo) => ({ ...todo, description: input }));
          }, [])}
        >
          {(fieldProps) => (
            <textarea {...fieldProps} className={`${commonClasses}`} />
          )}
        </Edit>
        <button className="btn-primary">Add Todo</button>
        <button type="button" className="btn-secondary" onClick={onFinish}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}
