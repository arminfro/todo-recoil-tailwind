import { ReactElement, useCallback, useState } from 'react';
import Edit, { ControlledFieldProps } from '@/features/todo/components/Edit';
import ListItemControl from '@/features/todo/components/ListItemControl';
import { GuardedUseTodo, useTodo } from '@/features/todo/hooks/useTodo';
import useIsMobile from '@/hooks/useIsMobile';
import List from '@/components/containers/List';

interface GuardProps {
  id: number;
}

interface Props {
  todo: GuardedUseTodo;
}

export default function Guard({ id }: GuardProps): ReactElement {
  const todo = useTodo(id);
  if (todo && todo.get) {
    return <TodoListItem todo={todo as GuardedUseTodo} />;
  } else {
    return <p>not found</p>;
  }
}

function TodoListItem({ todo }: Props): ReactElement {
  const [editValue, setEditValue] = useState({
    title: todo.get.title,
    description: todo.get.description,
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onTitleChange = useCallback((input: string) => {
    setEditValue((todo) => ({ ...todo, title: input }));
  }, []);

  const onDescriptionChange = useCallback((input: string) => {
    setEditValue((todo) => ({ ...todo, description: input }));
  }, []);

  const onSaveEdit = useCallback((): void => {
    todo.set.update(editValue.title, editValue.description);
    setIsEdit(false);
  }, [editValue, todo.set]);

  const isMobile = useIsMobile();

  const commonClasses = 'w-11/12 pl-1 dark:bg-gray-700 dark:text-indigo-200';

  const hasChanges =
    editValue.title !== todo.get.title ||
    editValue.description !== todo.get.description;

  return (
    <List.Item>
      {(hovered) => (
        <>
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
              <h3 className="w-11/12 uppercase truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-300 dark:text-indigo-200 group-hover:underline">
                {todo.get.title}
              </h3>
              <p
                className={`w-11/12 dark:text-indigo-100 text-gray-800 text-justify font-light group-hover:font-medium md:mr-10 ${
                  todo.get.completed && 'line-through'
                }`}
              >
                {todo.get.description}
              </p>
            </>
          )}
          {(hovered || isMobile) && (
            <ListItemControl
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              hasChanges={hasChanges}
              todo={todo}
              onSaveEdit={onSaveEdit}
              onDuplicate={todo.set.duplicate}
            />
          )}
        </>
      )}
    </List.Item>
  );
}
