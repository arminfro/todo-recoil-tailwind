import axios from 'axios';
import { ReactElement, useCallback, useRef, useState } from 'react';
import { useHover } from 'react-use';
import { GuardedUseTodo, useTodo } from '../hooks/useTodo';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../todo.type';
import Edit, { ControlledFieldProps } from './Edit';
import ListItemControl from './ListItemControl';

interface GuardProps {
  id: number;
  isEdit?: boolean;
  onAdd: (todo: Todo) => void;
}

interface Props extends GuardProps {
  todo: GuardedUseTodo;
}

export default function Guard(props: GuardProps): ReactElement {
  const todo = useTodo(props.id);
  if (todo && todo.get) {
    return <ListItem {...props} todo={todo as GuardedUseTodo} />;
  } else {
    return <p>not found</p>;
  }
}

function ListItem(props: Props): ReactElement {
  const todo = props.todo;
  const todos = useTodos();
  const [editValue, setEditValue] = useState({
    title: todo.get.title,
    description: todo.get.description,
  });
  const [isEdit, setIsEdit] = useState(props.isEdit || false);
  const commonClasses = 'w-10/12 pl-1 m-1';

  const onTitleChange = useCallback((input) => {
    setEditValue((todo) => ({ ...todo, title: input }));
  }, []);

  const onDescriptionChange = useCallback((input) => {
    setEditValue((todo) => ({ ...todo, description: input }));
  }, []);

  const onSaveEdit = useCallback((): void => {
    const data = { ...todo.get, ...editValue };
    axios({
      method: 'put',
      data,
      url: `/todos/${todo.get.id}`,
    });
    console.log('data for update', data);
    todos.set.update(data);
    setIsEdit(false);
  }, [editValue, todo.get, todos.set]);

  return useHover((hovered) => (
    <li className="relative py-4 ">
      {isEdit ? (
        <>
          <h3>
            <span className="text-indigo-400">&gt; </span>
            <Edit value={todo.get.title} onInputChange={onTitleChange}>
              {(fieldProps: ControlledFieldProps) => (
                <input
                  {...fieldProps}
                  className={`${fieldProps.className} ${commonClasses}`}
                />
              )}
            </Edit>
          </h3>
          <Edit
            value={todo.get.description}
            doAutoExpand
            onInputChange={onDescriptionChange}
          >
            {(fieldProps: ControlledFieldProps) => (
              <textarea
                {...fieldProps}
                className={`${fieldProps.className} ${commonClasses} ml-7`}
              />
            )}
          </Edit>
        </>
      ) : (
        <>
          <h3 className="underline">
            <span className="text-indigo-400">&gt; </span>
            <span className={`w-10/12`}>{todo.get.title}</span>
          </h3>
          <p
            className={`w-10/12 ml-7  ${todo.get.completed && 'line-through'}`}
          >
            {todo.get.description}
          </p>
        </>
      )}
      {hovered && (
        <ListItemControl
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          todo={props.todo}
          onSaveEdit={onSaveEdit}
          onAdd={props.onAdd}
        />
      )}
    </li>
  ))[0];
}
