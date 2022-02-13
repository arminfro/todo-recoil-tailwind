import { ReactElement, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import ListControl from '@/features/todo/components/ListControl/Index';
import ListItem from '@/features/todo/components/ListItem';
import { Todo } from '@/features/todo/todo.type';
import { useTodos } from '@/features/todo/hooks/useTodos';
import { todoListFilterState } from '@/features/todo/todo.recoil';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const todos = useTodos(props.todos);
  const [_, setFilter] = useRecoilState(todoListFilterState);

  return (
    <>
      <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
        {todos.get.filtered.map((todo) => (
          <ListItem key={todo.id} id={todo.id} />
        ))}
      </ul>
      <ListControl
        showCompleted={useCallback(() => {
          setFilter('completed');
        }, [setFilter])}
        showUncompleted={useCallback(() => {
          setFilter('uncompleted');
        }, [setFilter])}
        showAll={useCallback(() => {
          setFilter('all');
        }, [setFilter])}
        onAdd={todos.set.add}
      />
    </>
  );
}
