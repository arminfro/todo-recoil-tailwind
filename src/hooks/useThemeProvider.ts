import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { Theme } from './useTheme';

export default function useThemeProvider(): [Theme, () => void] {
  return useContext(ThemeContext);
}
