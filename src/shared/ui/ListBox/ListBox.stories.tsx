import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "100px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "123",
  items: [
    {
      content: "Item 1",
      value: "1",
    },
    {
      content: "Item 2",
      value: "2",
    },
    {
      content: "Item 3",
      value: "3",
    },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  value: "123",
  direction: "top left",
  items: [
    {
      content: "Item 1",
      value: "1",
    },
    {
      content: "Item 2",
      value: "2",
    },
    {
      content: "Item 3",
      value: "3",
    },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  value: "123",
  direction: "top right",
  items: [
    {
      content: "Item 1",
      value: "1",
    },
    {
      content: "Item 2",
      value: "2",
    },
    {
      content: "Item 3",
      value: "3",
    },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  value: "123",
  direction: "bottom left",
  items: [
    {
      content: "Item 1",
      value: "1",
    },
    {
      content: "Item 2",
      value: "2",
    },
    {
      content: "Item 3",
      value: "3",
    },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  value: "123",
  direction: "bottom right",
  items: [
    {
      content: "Item 1",
      value: "1",
    },
    {
      content: "Item 2",
      value: "2",
    },
    {
      content: "Item 3",
      value: "3",
    },
  ],
};
