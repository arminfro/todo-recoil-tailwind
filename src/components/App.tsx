import { ReactElement } from 'react';

import Context from '@/components/containers/Context';
import Container from '@/components/containers/Container';

import TodoList from '@/features/todo/components/List';

export default function App(): ReactElement {
  return (
    <Context>
      <Container>
        <TodoList />
      </Container>
    </Context>
  );
}
