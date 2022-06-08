import List from '@/components/containers/List';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: List.Container,
} as ComponentMeta<typeof List.Container>;

const Template: ComponentStory<typeof List.Container> = () => (
  <List.Container>
    <List.Item>
      {(hovered) => (
        <span className="dark:text-indigo-200">
          List Item 1 {hovered && ' (hovered)'}
        </span>
      )}
    </List.Item>
    <List.Item>
      {(hovered) => (
        <span className="dark:text-indigo-200">
          List Item 2 {hovered && ' (hovered)'}
        </span>
      )}
    </List.Item>
    <List.Item>
      {(hovered) => (
        <span className="dark:text-indigo-200">
          List Item 3 {hovered && ' (hovered)'}
        </span>
      )}
    </List.Item>
  </List.Container>
);

export const Primary = Template.bind({});
