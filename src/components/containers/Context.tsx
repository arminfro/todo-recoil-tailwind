import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';

import ThemeProvider from '@/context/ThemeProvider';
import TodoContext from '@/features/todo/components/Context';
import { SWRProvider } from '@/lib/swr';

interface Props {
  children: ReactElement | ReactElement[];
}

export default function Context({ children }: Props): ReactElement {
  return (
    <SWRProvider>
      <ThemeProvider>
        <RecoilRoot>
          <TodoContext>{children}</TodoContext>
        </RecoilRoot>
      </ThemeProvider>
    </SWRProvider>
  );
}
