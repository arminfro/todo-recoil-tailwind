import { ReactElement } from 'react';

import useIsMobile from '@/hooks/useIsMobile';
import { Menu } from '@headlessui/react';
import { IconType } from 'react-icons';

interface Props {
  Icon: IconType;
  IconHover?: IconType;
  name: string;
  onClick?: () => void;
}

function DesktopControlAction({ Icon, IconHover, name, onClick }: Props) {
  const buttonClasses = (active: boolean) =>
    `flex w-full pl-2 py-2 lg:m-1 xl:m-2  ${
      active ? 'underline dark:text-indigo-300' : 'dark:text-indigo-200'
    }`;

  const iconClasses = (active: boolean) =>
    `w-5 h-5 mr-2 ${
      active
        ? 'text-indigo-900 dark:text-indigo-300'
        : 'text-indigo-700 dark:text-indigo-200'
    }`;

  return (
    <Menu.Item key={name}>
      {({ active }) => (
        <div>
          <button
            className={buttonClasses(active)}
            onClick={onClick}
            aria-hidden="true"
          >
            {!active || !IconHover ? (
              <Icon className={iconClasses(active)} />
            ) : (
              <IconHover className={iconClasses(active)} />
            )}
            {''}
            {name}
          </button>
        </div>
      )}
    </Menu.Item>
  );
}

function MobileControlAction({ Icon, name, onClick }: Props) {
  const buttonClasses =
    'pl-2 py-2 w-full text-center dark:text-indigo-200 rounded-t-md border-t-2 dark:border-indigo-200';

  const iconClasses = `w-5 h-5 mr-2 inline text-indigo-700 dark:text-indigo-200`;

  return (
    <Menu.Item key={name}>
      <button className={buttonClasses} onClick={onClick} aria-hidden="true">
        <Icon className={iconClasses} />
        {name}
      </button>
    </Menu.Item>
  );
}

export default function Action(props: Props): ReactElement {
  const isMobile = useIsMobile();
  // todo, add mobile
  return isMobile ? (
    <MobileControlAction {...props} />
  ) : (
    <DesktopControlAction {...props} />
  );
}
