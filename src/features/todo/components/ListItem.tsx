import { ReactElement, useCallback, useState } from 'react';
import { useHover } from 'react-use';
import { GuardedUseTodo, useTodo } from '../hooks/useTodo';
import Edit, { ControlledFieldProps } from './Edit';
import ListItemControl from './ListItemControl';

interface GuardProps {
  id: number;
}

interface Props {
  todo: GuardedUseTodo;
}

export default function Guard({ id }: GuardProps): ReactElement {
  const todo = useTodo(id);
  if (todo && todo.get) {
    return <ListItem todo={todo as GuardedUseTodo} />;
  } else {
    return <p>not found</p>;
  }
}

function ListItem({ todo }: Props): ReactElement {
  const [editValue, setEditValue] = useState({
    title: todo.get.title,
    description: todo.get.description,
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onTitleChange = useCallback((input) => {
    setEditValue((todo) => ({ ...todo, title: input }));
  }, []);

  const onDescriptionChange = useCallback((input) => {
    setEditValue((todo) => ({ ...todo, description: input }));
  }, []);

  const onSaveEdit = useCallback((): void => {
    todo.set.update(editValue.title, editValue.description);
    setIsEdit(false);
  }, [editValue, todo.set]);

  const commonClasses = 'w-11/12 pl-1';

  return useHover((hovered) => (
    <li className="relative px-1 py-3 py-4 border-b-2 border-l-2 border-gray-100 border-solid rounded-bl-lg lg:py-6 xl:py-8 md:my-4 sm:my-0 hover:border-opacity-70 group hover:border-indigo-700">
      {isEdit ? (
        <>
          <h2>
            <Edit value={todo.get.title} onInputChange={onTitleChange}>
              {(fieldProps: ControlledFieldProps) => (
                <input {...fieldProps} className={`${commonClasses}`} />
              )}
            </Edit>
          </h2>
          <Edit
            value={todo.get.description}
            doAutoExpand
            onInputChange={onDescriptionChange}
          >
            {(fieldProps: ControlledFieldProps) => (
              <textarea {...fieldProps} className={`${commonClasses}`} />
            )}
          </Edit>
        </>
      ) : (
        <>
          <h3 className="w-11/12 uppercase truncate group-hover:text-indigo-700 group-hover:underline">
            {todo.get.title}
          </h3>
          <p
            className={`w-11/12 text-gray-800 text-justify font-light group-hover:font-medium md:mr-10 ${
              todo.get.completed && 'line-through'
            }`}
          >
            {todo.get.description}
          </p>
        </>
      )}
      {hovered && (
        <ListItemControl
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          todo={todo}
          onSaveEdit={onSaveEdit}
          onDuplicate={todo.set.duplicate}
        />
      )}
    </li>
  ))[0];
}
