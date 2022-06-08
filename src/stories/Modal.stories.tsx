import Modal from '@/components/containers/Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback, useState } from 'react';

export default {
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [showModal, setShowModal] = useState(args.isOpen);
  const onOpen = useCallback(() => setShowModal(true), []);

  return (
    <>
      <Modal
        {...args}
        isOpen={showModal}
        onClose={useCallback(() => {
          args.onClose();
          setShowModal(false);
        }, [args])}
      />
      <button className="btn-primary" onClick={onOpen}>
        Open
      </button>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Modal Title',
  isOpen: false,
  onClose: () => console.log('onClose'),
  children: <span className="dark:text-indigo-200">Content</span>,
};
