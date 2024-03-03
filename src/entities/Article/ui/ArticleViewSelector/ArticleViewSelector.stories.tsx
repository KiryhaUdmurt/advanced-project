import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleView } from "entities/Article/model/types/article";
import { ArticleViewSelector } from "./ArticleViewSelector";

export default {
  title: "entities/ArticleViewSelector",
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const WithGrid = Template.bind({});
WithGrid.args = {
  view: ArticleView.GRID,
};

export const WithList = Template.bind({});
WithList.args = {
  view: ArticleView.LIST,
};
