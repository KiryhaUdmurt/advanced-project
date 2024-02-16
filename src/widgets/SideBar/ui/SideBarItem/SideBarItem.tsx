import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SideBarItemType } from "widgets/SideBar/model/items";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBarItem.module.scss";

interface SideBarItemProps {
  item?: SideBarItemType;
  collapsed: boolean;
}
export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
