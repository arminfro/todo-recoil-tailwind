import { useMedia } from 'react-use';

export default function useIsMobile(): boolean {
  return !useMedia('(min-width: 640px)');
}
