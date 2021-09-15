import axios, { AxiosPromise } from 'axios';
import { Todo, TodoCreate } from './todo.type';

export const todoApi = {
  getAll: (path: string): AxiosPromise<Todo[]> =>
    axios({
      method: 'GET',
      url: `${path}`,
    }),
  create: (todo: TodoCreate): AxiosPromise<Todo> =>
    axios({
      method: 'post',
      data: todo,
      url: '/todos',
    }),
  update: (todo: Todo): AxiosPromise<Todo> =>
    axios({
      method: 'put',
      data: todo,
      url: `/todos/${todo.id}`,
    }),
  delete: (id: number): AxiosPromise<string> =>
    axios({
      method: 'delete',
      url: `/todos/${id}`,
    }),
};
