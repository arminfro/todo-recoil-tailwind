import { DocsContainer } from '@storybook/addon-docs';
import addons from '@storybook/addons';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../src/index.css';
import { handlers } from '../src/mocks/handlers';
import { decorators as globalDecorators } from '../src/stories/utils/decorators';

import { UPDATE_DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  msw: {
    handlers: {
      todos: handlers,
    },
  },
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true,
  },
  docs: {
    container: (props) => {
      const onChangeHandler = () => {
        channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
      };
      return (
        <div>
          <input type="checkbox" onChange={onChangeHandler} />
          <label className="dark:text-indigo-200">Toggle Theme</label>
          <DocsContainer {...props} />
        </div>
      );
    },
  },
};

// Initialize MSW
initialize({
  // onUnhandledRequest: 'bypass'
});

// Provide the MSW addon decorator globally
export const decorators = [...globalDecorators, mswDecorator];
