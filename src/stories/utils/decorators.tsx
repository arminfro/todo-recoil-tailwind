import { Story } from '@storybook/react';

import Context from '@/components/containers/Context';

export const decorators = [
  (Story: Story) => (
    <Context>
      <div className="rounded-none shadow-xl sm:px-1 md:px-2 dark:bg-gray-900 bg-gray-50 sm:rounded-xl">
        <Story />
      </div>
    </Context>
  ),
];
