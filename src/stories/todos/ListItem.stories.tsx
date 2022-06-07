import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import ListItem from '../../features/todo/components/ListItem';

export default {
  decorators: [
    (Story: Story) => (
      <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
        <Story />
      </ul>
    ),
  ],
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
};
