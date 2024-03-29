import { memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  ArticleList,
} from "entities/Article";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitilaEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Page } from "widgets/Page/Page";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage/fetchNextArticlePage";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlePageSlice";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import cls from "./ArticlesPage.module.scss";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);

  const [searchParams] = useSearchParams();

  const onLoadNexPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return (
      <Page>
        <Text
          title={t("Произошла ошибка при загрузке статей")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNexPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList className={cls.list} view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
