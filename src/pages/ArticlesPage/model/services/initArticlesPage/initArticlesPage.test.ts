import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { initArticlesPage } from "./initArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");

// ПЕРЕСМОТРЕТЬ !!!

describe("initArticlesPage.test", () => {
  const searchParams = new URLSearchParams();
  searchParams.set("order", "asc");
  searchParams.set("sort", ArticleSortField.CREATED_AT);
  searchParams.set("search", "");
  searchParams.set("type", ArticleType.ALL);

  test("not inited", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.LIST,
        _inited: false,
        search: "",
        order: "asc",
        sort: ArticleSortField.CREATED_AT,
        type: ArticleType.ALL,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(7);
    expect(fetchArticlesList).toHaveBeenCalled();
  });
  test("inited", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        view: ArticleView.LIST,
        _inited: true,
        search: "",
        order: "asc",
        sort: ArticleSortField.CREATED_AT,
        type: ArticleType.ALL,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
