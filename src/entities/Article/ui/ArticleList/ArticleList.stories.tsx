import { ComponentStory, ComponentMeta } from "@storybook/react";
import { article } from "shared/const/articleData";
import { ArticleView } from "../../model/types/article";
import { ArticleList } from "./ArticleList";

export default {
  title: "entities/ArticleList",
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

export const LoadingList = Template.bind({});
LoadingList.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.GRID,
};

export const List = Template.bind({});
List.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.LIST,
};

export const Grid = Template.bind({});
Grid.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.GRID,
};
