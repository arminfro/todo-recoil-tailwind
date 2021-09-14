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

        <div className="relative w-full p-6 bg-white rounded-lg sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 bg-gray-50">
          <Dialog.Title>{title}</Dialog.Title>
          <hr className="border-t-2 border-indigo-700" />
          <Dialog.Description as="div" className="py-4">
            {children}
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
  );
}
