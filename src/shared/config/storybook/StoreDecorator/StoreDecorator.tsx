import { Story } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const defaultReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer
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
