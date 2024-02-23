import { articleData } from "shared/const/dataForTests";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "./articleDetailsSlice";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";

describe("articleDetailsSlice.test", () => {
  test("test pending", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({
      isLoading: true,
    });
  });

  test("test fulfilled", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(articleData, "", "")
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      data: articleData,
    });
  });
});
