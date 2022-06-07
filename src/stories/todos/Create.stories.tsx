import Create from '@/features/todo/components/Create';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Create,
} as ComponentMeta<typeof Create>;

const Template: ComponentStory<typeof Create> = (args) => <Create {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  onAdd: async (todo) => {
    console.log('onAdd', todo);
  },
  onFinish: () => {
    console.log('onFinish');
  },
};
