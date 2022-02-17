import { faker } from '@faker-js/faker';
import { Todo } from './todo.type';

export function todoFactory(id: number): Todo {
  return {
    id,
    title: faker.lorem.slug(),
    description: faker.lorem.paragraph(),
    completed: faker.datatype.boolean(),
  };
}
