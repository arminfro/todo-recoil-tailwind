import { ReactElement, useCallback, useState } from 'react';
import { Todo } from '../types/todo';
import ListControl from './ListControl';
import ListItem from './ListItem';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const [todos, setTodos] = useState(props.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
      <ListControl
        onComplete={useCallback(
          () => setTodos(props.todos.filter((todo) => !todo.completed)),
          [props.todos],
        )}
        onUncomplete={useCallback(
          () => setTodos(props.todos.filter((todo) => todo.completed)),
          [props.todos],
        )}
        onReset={useCallback(() => setTodos(props.todos), [props.todos])}
      />
    </ul>
  );
}
