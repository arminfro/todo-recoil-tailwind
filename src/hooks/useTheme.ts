import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

export type Theme = 'dark' | 'light' | undefined;

export const nextThemeValue = (currentTheme: Theme): Theme =>
  currentTheme === 'dark' ? 'light' : 'dark';

export default function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

  useEffect(() => {
    const html = document.querySelector('html');
    if (html && theme) {
      html.classList.remove('dark', 'light');
      html.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    // todo, functional update won't work, param isn't latest value
    setTheme(nextThemeValue(theme));

  return [theme, toggleTheme];
}
