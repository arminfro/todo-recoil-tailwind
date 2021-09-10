import { Dialog } from '@headlessui/react';
import { ReactElement } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string | ReactElement;
  children: ReactElement;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: Props): ReactElement {
  return (
    <Dialog
      data-test-id="create-modal"
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

        <div className="relative p-6 mx-auto bg-white rounded min-w-1/2">
          <Dialog.Title>{title}</Dialog.Title>
          <hr className="border-t-2 border-indigo-400" />
          <Dialog.Description as="div" className="py-4">
            {children}
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
  );
}
