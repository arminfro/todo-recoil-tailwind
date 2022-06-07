import { FormEvent, ReactElement, useCallback, useState } from 'react';

import Edit from '@/features/todo/components/Edit';
import { Todo, TodoCreate } from '@/features/todo/todo.type';

interface Props {
  onAdd: (todo: TodoCreate) => Promise<void | Todo>;
  onFinish?: () => void;
  className?: string;
}

export default function Create({
  onAdd,
  onFinish,
  className,
}: Props): ReactElement {
  const [todo, setTodo] = useState({ title: '', description: '' });

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onAdd(todo).then(onFinish);
    },
    [todo, onFinish, onAdd],
  );

  const commonClasses =
    'block p-2 w-11/12 dark:bg-gray-700 dark:text-indigo-200';

  return (
    <form onSubmit={onSubmit} className={className}>
      <Edit
        label={
          <label htmlFor="title" className="block mr-4 dark:text-indigo-200">
            Title
          </label>
        }
        onInputChange={useCallback((input: string) => {
          setTodo((todo) => ({ ...todo, title: input }));
        }, [])}
      >
        {(fieldProps) => (
          <input
            {...fieldProps}
            required
            className={`${commonClasses}`}
            id="title"
          />
        )}
      </Edit>

      <Edit
        label={
          <label
            htmlFor="description"
            className="block mr-4 dark:text-indigo-200"
          >
            Content
          </label>
        }
        onInputChange={useCallback((input: string) => {
          setTodo((todo) => ({ ...todo, description: input }));
        }, [])}
      >
        {(fieldProps) => (
          <textarea
            {...fieldProps}
            required
            className={`${commonClasses}`}
            id="description"
          />
        )}
      </Edit>

      <button className="btn-primary">Add Todo</button>

      {onFinish && (
        <button type="button" className="btn-secondary" onClick={onFinish}>
          Cancel
        </button>
      )}
    </form>
  );
}
