import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: "1",
      text: "random text",
      user: {
        id: "1",
        username: "Kir",
      },
    },
    {
      id: "2",
      text: "random text 2",
      user: {
        id: "2",
        username: "Fil",
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
