import App from '@/components/App';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { ReactElement, ReactNode } from 'react';
import { mocked } from 'ts-jest/utils';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'> & { route?: string },
): RenderResult => {
  if (options?.route) {
    window.history.pushState({}, 'document.title', options.route);
  }

  const providers = ({ children }: { children?: ReactNode }) => {
    return <App />;
  };

  return render(ui, {
    wrapper: providers,
    ...options,
  });
};

const matchSnapshot = (renderResult: RenderResult): void => {
  const { baseElement } = renderResult;
  expect(baseElement).toMatchSnapshot();
};

jest.mock('axios');
const mockAxios = (): void => {
  const axiosResponse: AxiosResponse = {
    status: 200,
    statusText: '',
    headers: null,
    config: {},
    data: { test: 'ok' },
  };
  mocked(axios).mockImplementation((url, config): AxiosPromise => {
    console.log('url', url, 'config', config);
    if (config) {
      switch (config.method) {
        case 'get':
          if (url) {
            return Promise.resolve({
              ...axiosResponse,
            });
          }
          break;
      }
    }
    return Promise.resolve(axiosResponse);
  });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, matchSnapshot, mockAxios };
