import List from '@/components/containers/List';
import Section from '@/components/containers/Section';
import ListControl from '@/features/todo/components/ListControl';
import ListItem from '@/features/todo/components/ListItem';
import { ReactElement, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useTodoContext } from '../context';
import { todoListFilterState } from '../todo.recoil';
import Create from './Create';

export default function TodoList(): ReactElement {
  const todos = useTodoContext();

  const [_, setFilter] = useRecoilState(todoListFilterState);
  const setFilterToAll = useCallback(() => setFilter('all'), [setFilter]);

  const hasTodos = todos.get.all.length > 0;
  const hasTodosWithFilter = todos.get.filtered.length > 0;

  return (
    <>
      {hasTodosWithFilter ? (
        <List.Container>
          {todos.get.filtered.map((todo) => (
            <ListItem key={todo.id} id={todo.id} />
          ))}
        </List.Container>
      ) : hasTodos ? (
        <Section>
          <h2>No Todos with current Filter</h2>
          <button className="btn-primary" onClick={setFilterToAll}>
            Reset Filter
          </button>
        </Section>
      ) : (
        <Create onAdd={todos.set.add} className="p-6" />
      )}
      <ListControl
        hasTodos={hasTodos}
        setFilter={setFilter}
        onAdd={todos.set.add}
        onClearCompleted={todos.set.clearCompleted}
        onCompleteAll={todos.set.completeAll}
      />
    </>
  );
}
