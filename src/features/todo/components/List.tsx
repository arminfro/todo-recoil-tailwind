import { ReactElement, useCallback, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../todo.type';
import ListControl from './ListControl/Index';
import ListItem from './ListItem';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const todos = useTodos(props.todos);
  const [filter, setFilter] = useState<'completed' | 'uncompleted' | 'all'>(
    'all',
  );

  const todoFilter = {
    completed: todos.get.completed(),
    uncompleted: todos.get.uncompleted(),
    all: todos.get.all(),
  };

  return (
    <>
      <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
        {todoFilter[filter].map((todo) => (
          <ListItem key={todo.id} id={todo.id} />
        ))}
      </ul>
      <ListControl
        showCompleted={useCallback(() => {
          setFilter('completed');
        }, [])}
        showUncompleted={useCallback(() => {
          setFilter('uncompleted');
        }, [])}
        showAll={useCallback(() => {
          setFilter('all');
        }, [])}
        onAdd={todos.set.add}
      />
    </>
  );
}
