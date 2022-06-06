import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Create from '../../features/todo/components/Create';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // title: 'Example/Button',
  component: Create,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   // className: 'string'
  // },
} as ComponentMeta<typeof Create>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Create> = (args) => <Create {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  className: '',
  onAdd: async (todo) => {
    console.log('onAdd');
  },
  onFinish: () => {
    console.log('onFinish');
  },
};
