import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import cls from "./SideBar.module.scss";
import { getSideBarItems } from "../../model/selectors/getSideBarItems";

interface SideBarProps {
  className?: string;
}
export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sideBarItemsList = useSelector(getSideBarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return sideBarItemsList.map((item) => (
      <SideBarItem item={item} collapsed={collapsed} key={item.path} />
    ));
  }, [collapsed, sideBarItemsList]);

  return (
    <menu
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

      <div className={cls.items}>{itemsList}</div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </menu>
  );
});
