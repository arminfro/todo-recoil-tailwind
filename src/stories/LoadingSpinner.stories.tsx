import LoadingSpinner from '@/components/utils/LoadingSpinner';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = () => (
  <LoadingSpinner />
);

export const Primary = Template.bind({});
