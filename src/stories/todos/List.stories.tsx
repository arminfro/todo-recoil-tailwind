import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from '../../features/todo/components/List';

export default {
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = () => <List />;

export const Primary = Template.bind({});
