import { StateSchema } from "app/providers/StoreProvider";

export const getProfileIsLoadingr = (state: StateSchema) => state.profile?.isLoading;
