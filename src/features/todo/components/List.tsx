import { ReactElement, useCallback, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../todo.type';
import ListControl from './ListControl';
import ListItem from './ListItem';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const todos = useTodos(props.todos);
  console.log(todos.get.all());
  return (
    <ul>
      {todos.get.all().map((todo) => (
        <ListItem key={todo.id} id={todo.id} onAdd={todos.set.add} />
      ))}
      <ListControl
        onComplete={useCallback(
          () =>
            todos.set.generic(props.todos.filter((todo) => !todo.completed)),
          [todos.set, props.todos],
        )}
        onUncomplete={useCallback(
          () => todos.set.generic(props.todos.filter((todo) => todo.completed)),
          [todos.set, props.todos],
        )}
        onReset={useCallback(
          () => todos.set.generic(props.todos),
          [todos.set, props.todos],
        )}
        onAdd={todos.set.add}
      />
    </ul>
  );
}
