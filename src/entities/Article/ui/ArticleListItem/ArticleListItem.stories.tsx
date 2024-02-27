import { ComponentStory, ComponentMeta } from "@storybook/react";
import { article } from "shared/const/articleData";
import { ArticleView } from "../../model/types/article";
import { ArticleListItem } from "./ArticleListItem";

export default {
  title: "entities/ArticleListItem",
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export const LIST = Template.bind({});
LIST.args = {
  view: ArticleView.LIST,
  article,
};

export const GRID = Template.bind({});
GRID.args = {
  view: ArticleView.GRID,
  article,
};
