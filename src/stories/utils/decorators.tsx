import { AppContainer } from '@/components/AppContainer';

export const decorators = [
  (Story: any) => (
    <AppContainer>
      <Story />
    </AppContainer>
  ),
];
