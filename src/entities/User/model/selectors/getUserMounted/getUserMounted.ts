import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getUserMounted = (state: StateSchema) => state.user._mounted;
