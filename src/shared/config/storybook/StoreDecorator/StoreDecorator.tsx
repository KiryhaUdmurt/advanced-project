import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
    (StoryComponent: Story) =>
      (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
          <StoryComponent />
        </StoreProvider>
      );
