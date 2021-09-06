import axios from 'axios';
import {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import Modal from 'src/components/containers/Modal';
import Edit from './Edit';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Create({ isOpen, setIsOpen }: Props): ReactElement {
  const [todo, setTodo] = useState({ title: '', description: '' });

  const onFinish = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      axios({
        method: 'post',
        data: todo,
        url: '/todos',
      }).then(onFinish);
    },
    [todo, onFinish],
  );

  const commonClasses = 'block p-2 w-72';

  return (
    <Modal
      isOpen={isOpen}
      onClose={useCallback(() => setIsOpen(false), [setIsOpen])}
      title="Add Todo"
    >
      <form onSubmit={onSubmit}>
        <Edit
          label={<label className="block mr-4">Title</label>}
          onInputChange={useCallback((input) => {
            setTodo((todo) => ({ ...todo, title: input }));
          }, [])}
        >
          {(fieldProps) => (
            <input
              {...fieldProps}
              className={`${fieldProps.className} ${commonClasses}`}
            />
          )}
        </Edit>

        <Edit
          label={<label className="block mr-4">Content</label>}
          onInputChange={useCallback((input) => {
            setTodo((todo) => ({ ...todo, description: input }));
          }, [])}
        >
          {(fieldProps) => (
            <textarea
              {...fieldProps}
              className={`${fieldProps.className} ${commonClasses}`}
            />
          )}
        </Edit>
        <button className="btn-indigo">Add Todo</button>
        <button type="button" className="btn-indigo" onClick={onFinish}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}
