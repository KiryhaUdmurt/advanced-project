import { FC, lazy } from "react";
import { AddNewCommentProps } from "./AddNewComment";

export const AddNewCommentAsync = lazy<FC<AddNewCommentProps>>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./AddNewComment")), 1000);
    })
);
