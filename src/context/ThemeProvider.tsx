import useTheme, { Theme } from '@/hooks/useTheme';
import React, { ReactElement } from 'react';

export const ThemeContext = React.createContext(
  [] as unknown as [Theme, () => void],
);

interface Props {
  children: ReactElement;
}

export default function ThemeProvider({ children }: Props): ReactElement {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
}
