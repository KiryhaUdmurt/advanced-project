import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = () => <Skeleton />;

export const Regular = Template.bind({});
Regular.args = {
  width: "100%",
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  border: "50%",
  height: 100,
  width: 100,
};

export const RegularDark = Template.bind({});
RegularDark.args = {
  width: "100%",
  height: 200,
};
RegularDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: "50%",
  height: 100,
  width: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RegularViolet = Template.bind({});
RegularViolet.args = {
  width: "100%",
  height: 200,
};
RegularViolet.decorators = [ThemeDecorator(Theme.VIOLET)];

export const CircleViolet = Template.bind({});
CircleViolet.args = {
  border: "50%",
  height: 100,
  width: 100,
};
CircleViolet.decorators = [ThemeDecorator(Theme.VIOLET)];
