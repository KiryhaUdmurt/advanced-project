// export interface CounterState {
//   value: number;
// }

import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  //   counter: CounterState;
  user: UserSchema;
  loginForm?: LoginSchema;
}
