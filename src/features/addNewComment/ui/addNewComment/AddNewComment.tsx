import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  addNewCommentActions,
  addNewCommentReducer,
} from "../../model/slices/addNewCommentSlice";
import {
  getAddNewCommentError,
  getAddNewCommentText,
} from "../../model/selectors/addNewCommentSelectors";
import cls from "./addNewComment.module.scss";

export interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addNewComment: addNewCommentReducer,
};

const AddNewComment = memo(
  ({ className, onSendComment }: AddNewCommentProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addNewCommentActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || "");
      onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(cls.AddNewComment, {}, [className])}>
          <Input
            className={cls.input}
            value={text}
            onChange={onCommentTextChange}
            placeholder={t("Введите текст комментария")}
          />
          <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
            {t("Отправить")}
          </Button>
        </div>
      </DynamicModuleLoader>
    );
  }
);

export default AddNewComment;
