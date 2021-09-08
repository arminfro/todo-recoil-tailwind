import { atom } from 'recoil';
import { Todo } from './todo.type';

export const todosState = atom<Todo[]>({ key: 'todo-list', default: [] });
