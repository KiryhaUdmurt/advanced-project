import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import Avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from "./ProfileCard";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: "admin",
    age: 23,
    country: Country.Russia,
    first: "Kir",
    lastname: "Kalinin",
    city: "Kazan",
    currency: Currency.RUB,
    avatar: Avatar
  },
};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: "asd", password: "123" },
  }),
];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: "error",
};
