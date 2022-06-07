import { initialize, mswDecorator } from 'msw-storybook-addon';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/index.css';
import { handlers } from '../src/mocks/handlers';
import { decorators as globalDecorators } from '../src/stories/utils/decorators';

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
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

// Initialize MSW
initialize({
  // onUnhandledRequest: 'bypass'
});

// Provide the MSW addon decorator globally
export const decorators = [...globalDecorators, mswDecorator];
