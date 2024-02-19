import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "asda",
  options: [
    { value: "4sdfa3", content: "text texty" },
    { value: "4sdasdfa3", content: "tefaxt texty" },
    { value: "43", content: "teAtexty" },
  ],
};
