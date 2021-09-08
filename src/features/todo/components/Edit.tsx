import {
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface ControlledFieldProps {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  value: string;
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: RefObject<any> | null; // fixme: RefObject<HTMLTextAreaElement | HTMLInputElement>
}

interface Props {
  value?: string;
  label?: ReactElement;
  doAutoExpand?: boolean;
  children: (c: ControlledFieldProps) => ReactElement;
  onInputChange?: (input: string) => void;
}

/* supports currently input or textarea elements */
export default function Edit({
  value,
  label,
  doAutoExpand,
  children,
  onInputChange,
}: Props): ReactElement {
  const [input, setValue] = useState(value || '');

  const autoExpandRef = useRef<HTMLTextAreaElement>(null);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  useEffect(() => {
    onInputChange && onInputChange(input);
  }, [input, onInputChange]);

  // height adjustment on textarea needed
  useEffect(() => {
    const t = autoExpandRef.current;
    if (t && !t.style.height) {
      t.style.height = t.scrollHeight + 2 + 'px';
    }
  });

  return (
    <>
      {label}
      {children({
        onChange,
        value: input,
        ref: doAutoExpand ? autoExpandRef : null,
        className:
          'ring-1 ring-indigo-200 focus:ring-2 active:border-solid active:border-3 active:border-indigo-400 active:border-opacity-60',
      })}
    </>
  );
}
