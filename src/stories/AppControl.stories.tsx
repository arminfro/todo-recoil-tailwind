import Control from '@/components/app-control';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md';

export default {
  component: Control.Groups,
} as ComponentMeta<typeof Control.Groups>;

const Template: ComponentStory<typeof Control.Groups> = (args) => (
  <div className="mb-72">
    <Control.Groups {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Control.Group name="Group 1" Icon={MdLightbulbOutline}>
        <Control.Action
          name="Action 1"
          Icon={MdLightbulbOutline}
          IconHover={MdLightbulb}
        />
        <Control.Action
          name="Action 2"
          Icon={MdLightbulbOutline}
          IconHover={MdLightbulb}
        />
      </Control.Group>
      <Control.Group name="Group 2" Icon={MdLightbulbOutline}>
        <Control.Action
          name="Action 1"
          Icon={MdLightbulbOutline}
          IconHover={MdLightbulb}
        />
        <Control.Action
          name="Action 2"
          Icon={MdLightbulbOutline}
          IconHover={MdLightbulb}
        />
      </Control.Group>
    </>
  ),
};
