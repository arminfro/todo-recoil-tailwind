import useIsMobile from '@/hooks/useIsMobile';
import { ReactElement } from 'react';

interface GProp {
  children: ReactElement | ReactElement[];
  name: string;
}

function DesktopControlGroup({ children, name }: GProp) {
  return (
    <section className="pl-2 py-2 text-sm dark:text-indigo-200">
      <span>{name}</span>
      <div>{children}</div>
    </section>
  );
}

export default function Group(props: GProp): ReactElement {
  const isMobile = useIsMobile();
  // todo, add mobile
  return isMobile ? (
    <DesktopControlGroup {...props} />
  ) : (
    <DesktopControlGroup {...props} />
  );
}
