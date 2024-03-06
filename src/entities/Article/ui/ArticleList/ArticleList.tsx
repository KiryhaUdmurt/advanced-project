import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import {
  AutoSizer,
  List,
  ListRowProps,
  WindowScroller,
} from "react-virtualized";
import { PAGE_ID } from "widgets/Page/Page";
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

    const isList = view === ArticleView.LIST;
    const itemsPerRow = isList ? 1 : 4;
    const rowCount = isList
      ? articles.length
      : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, style, isScrolling, key }: ListRowProps) => {
      const items = [];
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      for (let i = fromIndex; i < toIndex; i += 1) {
        items.push(
          <ArticleListItem
            article={articles[i]}
            view={view}
            className={cls.card}
            target={target}
            key={`str+${i}`}
          />
        );
      }

      return (
        <div key={key} style={style} className={cls.row}>
          {items}
        </div>
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
      <WindowScroller
        scrollElement={document.getElementById(PAGE_ID) as Element}
      >
        {/* <AutoSizer> */}
        {({
          height,
          width,
          registerChild,
          onChildScroll,
          isScrolling,
          scrollTop,
        }) => (
          <div
            ref={registerChild}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isList ? 700 : 330}
              rowRenderer={rowRender}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
            {isLoading && getSkeletons(view)}
          </div>
        )}
        {/* </AutoSizer> */}
      </WindowScroller>
    );
  }
);
