import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoadingr } from "./getProfileIsLoading";

describe("getProfileIsLoading.test", () => {
  test("should return loading", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoadingr(state as StateSchema)).toEqual(true);
  });
});

describe("getLoginError.test", () => {
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoadingr(state as StateSchema)).toEqual(undefined);
  });
});
