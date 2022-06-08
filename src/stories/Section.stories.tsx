import Section from '@/components/containers/Section';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = () => (
  <Section>section text</Section>
);

export const Primary = Template.bind({});
