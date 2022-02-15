import ListControl from '@/features/todo/components/ListControl';
import ListItem from '@/features/todo/components/ListItem';
import { useTodos } from '@/features/todo/hooks/useTodos';
import { Todo } from '@/features/todo/todo.type';
import { ReactElement, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../todo.recoil';
import Create from './Create';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const todos = useTodos(props.todos);

  const [_, setFilter] = useRecoilState(todoListFilterState);
  const setFilterToAll = useCallback(() => setFilter('all'), [setFilter]);

  const hasTodos = todos.get.all.length > 0;
  const hasTodosWithFilter = todos.get.filtered.length > 0;

  if (!hasTodos) {
    return <Create onAdd={todos.set.add} className="p-6" />;
  }

  return (
    <>
      {hasTodosWithFilter ? (
        <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
          {todos.get.filtered.map((todo) => (
            <ListItem key={todo.id} id={todo.id} />
          ))}
        </ul>
      ) : (
        <section className="p-10 w-full text-indigo-700 dark:text-indigo-200">
          <h2>No Todos with current Filter</h2>
          <button className="btn-primary" onClick={setFilterToAll}>
            Reset Filter
          </button>
        </section>
      )}
      <ListControl
        setFilter={setFilter}
        onAdd={todos.set.add}
        onClearCompleted={todos.set.clearCompleted}
        onCompleteAll={todos.set.completeAll}
      />
    </>
  );
}
