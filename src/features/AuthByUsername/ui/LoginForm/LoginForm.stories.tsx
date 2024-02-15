import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorator = [
  StoreDecorator({
    loginForm: { username: "asd", password: "123" },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorator = [
  StoreDecorator({
    loginForm: { username: "asd", password: "123", error: "ERROR" },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorator = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
