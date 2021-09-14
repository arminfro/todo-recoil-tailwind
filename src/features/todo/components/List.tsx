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
    <>
      <ListControl
        onComplete={useCallback(
          () => todos.set.generic(props.todos.filter((todo) => todo.completed)),
          [todos.set, props.todos],
        )}
        onUncomplete={useCallback(
          () =>
            todos.set.generic(props.todos.filter((todo) => !todo.completed)),
          [todos.set, props.todos],
        )}
        onReset={useCallback(
          () => todos.set.generic(props.todos),
          [todos.set, props.todos],
        )}
        onAdd={todos.set.add}
      />
      <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
        {todos.get.all().map((todo) => (
          <ListItem key={todo.id} id={todo.id} onAdd={todos.set.add} />
        ))}
      </ul>
    </>
  );
}
