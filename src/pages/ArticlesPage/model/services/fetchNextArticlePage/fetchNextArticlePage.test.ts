// import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
// import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
// import { fetchNextArticlePage } from "./fetchNextArticlePage";
// import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

// jest.mock("../fetchArticlesList/fetchArticlesList");

// describe("fetchNextArticlePage.test", () => {
//   test("success fetch data", async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlePage, {
//       articlesPage: {
//         page: 2,
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: false,
//         hasMore: true,
//         view: ArticleView.LIST,
//         _inited: true,
//         search: "",
//         order: "asc",
//         sort: ArticleSortField.CREATED_AT,
//         type: ArticleType.ALL,
//       },
//     });

//     await thunk.callThunk();

//     expect(thunk.dispatch).toBeCalledTimes(4);
//     expect(fetchArticlesList).toBeCalledWith({ page: 3 });
//   });
//   test("fetchArticleList isnt called", async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlePage, {
//       articlesPage: {
//         page: 2,
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: false,
//         hasMore: false,
//         view: ArticleView.LIST,
//         _inited: true,
//         search: "",
//         order: "asc",
//         sort: ArticleSortField.CREATED_AT,
//         type: ArticleType.ALL,
//       },
//     });

//     await thunk.callThunk();

//     expect(thunk.dispatch).toBeCalledTimes(2);
//     expect(fetchArticlesList).not.toHaveBeenCalled();
//   });
// });
