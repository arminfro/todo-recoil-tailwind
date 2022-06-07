import AppContext from '@/components/AppContext';
import { Story } from '@storybook/react';

export const decorators = [
  (Story: Story) => (
    <AppContext>
      <div className="rounded-none shadow-xl sm:px-1 md:px-2 dark:bg-gray-900 bg-gray-50 sm:rounded-xl">
        <Story />
      </div>
    </AppContext>
  ),
];
