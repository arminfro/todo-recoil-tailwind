import { PropsWithChildren, ReactElement } from 'react';
import { useHover } from 'react-use';

interface Props {
  children: (hovered: boolean) => ReactElement | ReactElement[];
}

export default function List({ children }: Props) {
  return useHover((hovered) => (
    <li className="relative px-1 py-4 border-b-2 border-l-2 border-gray-100 border-solid rounded-bl-lg dark:border-black dark:hover:border-indigo-200 lg:py-6 xl:py-8 md:my-4 sm:my-0 hover:border-opacity-70 group hover:border-indigo-700">
      {children(hovered)}
    </li>
  ))[0];
}
