import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  L = "size_l",
  M = "size_m",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
