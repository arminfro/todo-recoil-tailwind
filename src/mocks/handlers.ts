import { times } from 'lodash';
import { rest } from 'msw';
import { todoFactory } from 'src/features/todo/todo.factory';
import { Todo } from 'src/features/todo/types/todo';

export const handlers = [
  rest.get('/todos', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(times<Todo>(3, (id) => todoFactory(id))),
    );
  }),

  rest.post('/todos', (req, res, ctx) => {
    console.log('posted data', req.body);
    return res(ctx.status(201, 'OK'));
  }),
];
