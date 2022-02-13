import { ReactElement, useCallback, useState } from 'react';
import ListControl from '@/features/todo/components/ListControl/Index';
import ListItem from '@/features/todo/components/ListItem';
import { useTodos } from '@/features/todo/hooks/useTodos';
import { Filter, Todo } from '@/features/todo/todo.type';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const todos = useTodos(props.todos);
  const [filter, setFilter] = useState<Filter>('all');

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
