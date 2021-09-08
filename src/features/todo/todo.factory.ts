import * as Faker from 'faker';
import { Todo } from './todo.type';

export function todoFactory(id: number): Todo {
  return {
    id,
    title: Faker.lorem.slug(),
    description: Faker.lorem.paragraph(),
    completed: Faker.datatype.boolean(),
  };
}
