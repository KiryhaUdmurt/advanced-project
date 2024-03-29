import { memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation("article");

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: "asc",
          content: t("возрастанию"),
        },
        {
          value: "desc",
          content: t("убыванию"),
        },
      ],
      [t]
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED_AT,
          content: t("дате создания"),
        },
        {
          value: ArticleSortField.TITLE,
          content: t("названию"),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t("просмотрам"),
        },
      ],
      [t]
    );

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          value={sort}
          options={sortFieldOptions}
          label={t("Сортировать по")}
          onChange={onChangeSort}
        />
        <Select
          value={order}
          options={orderOptions}
          label={t("по")}
          onChange={onChangeOrder}
          className={cls.order}
        />
      </div>
    );
  }
);
