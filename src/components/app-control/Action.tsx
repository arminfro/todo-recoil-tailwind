import useIsMobile from '@/hooks/useIsMobile';
import { Menu } from '@headlessui/react';
import { ReactElement } from 'react';

interface ChildProps {
  className: string;
  active: boolean;
}

interface Props {
  children: (p: ChildProps) => ReactElement;
  name: string;
  onClick?: () => void;
}

function DesktopControlAction({ children, name, onClick }: Props) {
  const buttonClasses = (active: boolean) =>
    `flex w-full pl-2 py-2 ${
      active ? 'underline dark:text-indigo-300' : 'dark:text-indigo-200'
    }`;

  const iconClasses = (active: boolean) =>
    `w-5 h-5 mr-2 ${
      active
        ? 'text-indigo-900 dark:text-indigo-300'
        : 'text-indigo-700 dark:text-indigo-200'
    }`;

  return (
    <Menu.Item key="completed">
      {({ active }) => (
        <div>
          <button
            className={buttonClasses(active)}
            onClick={onClick}
            aria-hidden="true"
          >
            {children({ className: iconClasses(active), active: active })}
            {name}
          </button>
        </div>
      )}
    </Menu.Item>
  );
}

export default function Action(props: Props): ReactElement {
  const isMobile = useIsMobile();
  // todo, add mobile
  return isMobile ? (
    <DesktopControlAction {...props} />
  ) : (
    <DesktopControlAction {...props} />
  );
}
