import ListControl from '@/features/todo/components/ListControl';
import ListItem from '@/features/todo/components/ListItem';
import { useTodos } from '@/features/todo/hooks/useTodos';
import { Todo } from '@/features/todo/todo.type';
import { ReactElement } from 'react';

interface Props {
  todos: Todo[];
}

export default function List(props: Props): ReactElement {
  const todos = useTodos(props.todos);

  return (
    <>
      <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
        {todos.get.filtered.map((todo) => (
          <ListItem key={todo.id} id={todo.id} />
        ))}
      </ul>
      <ListControl
        onAdd={todos.set.add}
        onClearCompleted={todos.set.clearCompleted}
        onCompleteAll={todos.set.completeAll}
      />
    </>
  );
}
