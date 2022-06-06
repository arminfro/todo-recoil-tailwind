import { initialize, mswDecorator } from 'msw-storybook-addon';
import {handlers} from '../src/mocks/handlers'
import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
      todos: handlers
    }
  },
}

// Initialize MSW
initialize({
  // onUnhandledRequest: 'bypass'
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];