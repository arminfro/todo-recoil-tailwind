import { rest } from 'msw'

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({msg: 'hello world'})
    )
  })
]
