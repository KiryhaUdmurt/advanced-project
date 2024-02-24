import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddNewCommentSchema } from "../types/addNewComment";

const initialState: AddNewCommentSchema = {
  text: "",
};

export const addNewCommentSlice = createSlice({
  name: "addNewComment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  //   extraReducers: (buider) => {
  //     buider
  //       .addCase(loginByUsername.pending, (state) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(loginByUsername.fulfilled, (state) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(loginByUsername.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
