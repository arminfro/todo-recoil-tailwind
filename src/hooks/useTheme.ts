import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

export default function useTheme(): void {
  const theme = useLocalStorage<'dark'>('theme', 'dark')[0];

  useEffect(() => {
    const html = document.querySelector('html');
    html && theme && html.classList.add(theme);
  }, [theme]);
}
