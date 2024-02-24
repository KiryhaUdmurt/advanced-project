import { Story } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { addNewCommentReducer } from "features/addNewComment/model/slices/addNewCommentSlice";
import { ReducerList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const defaultReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsComments: articleDetailsReducer
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
  ) =>
    (StoryComponent: Story) =>
      (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
          <StoryComponent />
        </StoreProvider>
      );
