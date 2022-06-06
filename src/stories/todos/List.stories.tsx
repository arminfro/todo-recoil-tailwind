import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from '../../features/todo/components/List';
import { config } from '../utils';

export default {
  ...config,
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = () => <List />;

export const Primary = Template.bind({});
