import { AppContainer } from '@/components/AppContainer';
import { Story } from '@storybook/react';

export const decorators = [
  (Story: Story) => (
    <AppContainer>
      <Story />
    </AppContainer>
  ),
];
