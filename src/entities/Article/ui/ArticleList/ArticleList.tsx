import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} className={cls.card} view={view} />
    ));

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    view = ArticleView.LIST,
    target,
  }: ArticleListProps) => {
    const { t } = useTranslation("article");

    const renderArticle = (article: Article) => {
      return (
        <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          key={article.id}
          target={target}
        />
      );
    };

    if (!articles.length && !isLoading) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <Text
            size={TextSize.L}
            title={t("Статьи не найдены")}
            align={TextAlign.CENTER}
          />
        </div>
      );
    }

    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </div>
    );
  }
);
