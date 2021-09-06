import { ReactElement, useRef, useState } from 'react';
import { useHover } from 'react-use';
import { Todo } from '../types/todo';
import Edit, { ControlledFieldProps } from './Edit';
import ListItemControl from './ListItemControl';

interface Props {
  todo: Todo;
  isEdit?: boolean;
}

export default function ListItem(props: Props): ReactElement {
  const [isEdit, setIsEdit] = useState(props.isEdit || false);
  const commonClasses = 'w-10/12 pl-1 m-1';

  return useHover((hovered) => (
    <li className="relative py-4 ">
      {isEdit ? (
        <>
          <h3>
            <span className="text-indigo-400">&gt; </span>
            <Edit value={props.todo.title}>
              {(fieldProps: ControlledFieldProps) => (
                <input
                  {...fieldProps}
                  className={`${fieldProps.className} ${commonClasses}`}
                />
              )}
            </Edit>
          </h3>
          <Edit value={props.todo.description} doAutoExpand>
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
            <span className={`w-10/12`}>{props.todo.title}</span>
          </h3>
          <p
            className={`w-10/12 ml-7  ${
              props.todo.completed && 'line-through'
            }`}
          >
            {props.todo.description}
          </p>
        </>
      )}
      {hovered && (
        <ListItemControl
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          todo={props.todo}
        />
      )}
    </li>
  ))[0];
}
