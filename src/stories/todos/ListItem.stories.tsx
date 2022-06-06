import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListItem from '../../features/todo/components/ListItem';
import { config } from '../utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  decorators: [
    (Story: any) => (
      <>
        <ul className="sm:p-1 sm:py-2 md:p-4 lg:p-8 xl:p-10 2xl:p-12">
          <Story />
        </ul>
      </>
    ),
    ...config.decorators,
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
