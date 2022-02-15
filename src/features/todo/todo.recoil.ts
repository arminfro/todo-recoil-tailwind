import { atom, selector } from 'recoil';
import { Filter, Todo } from './todo.type';

export const todosState = atom<Todo[]>({ key: 'todo-list', default: [] });

export const todoListFilterState = atom<Filter>({
  key: 'todo-list-filter',
  default: 'all',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todos = get(todosState);

    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
    }
  },
});
