import React from "react";
import { RouterPath } from "shared/config/routerConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";

export interface SideBarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SideBarItemsList: SideBarItemType[] = [
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
  {
    path: RouterPath.profile,
    icon: ProfileIcon,
    text: "Профиль",
    authOnly: true
  },
  {
    path: RouterPath.articles,
    icon: ArticleIcon,
    text: "Статьи",
    authOnly: true
  },
];
