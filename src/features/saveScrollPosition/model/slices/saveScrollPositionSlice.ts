import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SaveScrollPositionSchema } from "../types/saveScrollPositionSchema";

const initialState: SaveScrollPositionSchema = {
  scroll: {},
};

export const saveScrollPositionSlice = createSlice({
  name: "saveScrollPosition",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: saveScrollPositionActions } = saveScrollPositionSlice;
export const { reducer: saveScrollPositionReducer } = saveScrollPositionSlice;
