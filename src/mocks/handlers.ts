import { Headers } from 'headers-utils';
import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';
import { Todo, TodoCreate } from 'src/features/todo/todo.type';

export let mockedTodos: Todo[] = [
  {
    id: 1,
    title: 'quis-sit-hic',
    description:
      'Ratione veniam incidunt pariatur eaque fugiat rem soluta culpa. Reiciendis facilis non aut quis ut placeat. Sed quas repellat quae tenetur placeat vitae. Officia at unde tempora.',
    completed: false,
  },
  {
    id: 2,
    title: 'unde-atque-dicta',
    description:
      'Nisi iure illo aut autem itaque et. Quas vel fuga et ut alias. Quas asperiores voluptate voluptates id omnis molestiae odio. Omnis aut magnam explicabo voluptatem illo consectetur quisquam. Perspiciatis nulla facilis dolorem voluptatem iure qui.',
    completed: false,
  },
  {
    id: 3,
    title: 'harum-quod-distinctio',
    description:
      'Praesentium perspiciatis est et esse. Nobis sapiente quis modi molestias iste voluptas. Ut necessitatibus cumque voluptatem a voluptatem ab. Tempore possimus sequi sed distinctio voluptas. Aut molestias hic et est et et eligendi odit eos. Laboriosam fuga rem sunt quo porro iste et error qui.',
    completed: true,
  },
];

const passThroughHandler = async (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  const originalResponse = await ctx.fetch(req);
  return res((res) => {
    res.status = originalResponse.status;
    res.body = originalResponse.body;
    res.headers = originalResponse.headers as Headers;
    return res;
  });
};

export const handlers = [
  // GET list
  rest.get<undefined, Todo[]>('/todos', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedTodos));
  }),

  // POST new
  rest.post<TodoCreate, Todo>('/todos', (req, res, ctx) => {
    const newTodo = {
      ...req.body,
      id: mockedTodos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
    };
    mockedTodos = [...mockedTodos, newTodo];

    return res(ctx.status(201), ctx.json(newTodo));
  }),

  // PUT todo
  rest.put<Todo, Todo | undefined, { id: number }>(
    '/todos/:id',
    (req, res, ctx) => {
      const id = +req.params.id;
      mockedTodos = mockedTodos.map((todo) =>
        todo.id === id ? { ...todo, ...req.body } : todo,
      );
      return res(
        ctx.status(200),
        ctx.json(mockedTodos.find((todo) => todo.id === id)),
      );
    },
  ),

  // DELETE todo
  rest.delete<undefined, string, { id: number }>(
    '/todos/:id',
    (req, res, ctx) => {
      const { id } = req.params;
      mockedTodos = mockedTodos.filter((todo) => todo.id !== id);
      return res(ctx.status(200), ctx.text('OK'));
    },
  ),

  rest.get('/__cypress', passThroughHandler),
];
