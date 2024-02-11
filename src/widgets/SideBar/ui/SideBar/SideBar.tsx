import React, { useState } from "react";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routerConfig/routeConfig";
import { useTranslation } from "react-i18next";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <AppLink
          to={RouterPath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("Главная")}</span>
        </AppLink>
        <AppLink
          to={RouterPath.about}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("О нас")}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
