import Container from '@/components/containers/Container';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = () => (
  <Container>
    <span className="dark:text-indigo-200">container content</span>
  </Container>
);

export const Primary = Template.bind({});
