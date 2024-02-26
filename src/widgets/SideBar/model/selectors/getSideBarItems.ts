import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RouterPath } from "shared/config/routerConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons//about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
import { SideBarItemType } from "../types/sidebar";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
    {
      path: RouterPath.main,
      icon: MainIcon,
      text: "Главная",
    },
    {
      path: RouterPath.about,
      icon: AboutIcon,
      text: "О сайте",
    },
  ];

  if (userData) {
    sideBarItemsList.push(
      {
        path: RouterPath.profile + userData.id,
        icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
      },
      {
        path: RouterPath.articles,
        icon: ArticleIcon,
        text: "Статьи",
        authOnly: true,
      }
    );
  }

  return sideBarItemsList;
});
