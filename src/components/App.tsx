import List from '@/features/todo/components/List';
import { ReactElement } from 'react';
import { AppContainer } from './AppContainer';

export default function App(): ReactElement {
  return (
    <AppContainer>
      <List />
    </AppContainer>
  );
}
