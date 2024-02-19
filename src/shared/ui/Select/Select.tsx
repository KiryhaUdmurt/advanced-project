import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}
export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionList = useMemo(() => {
      return options?.map((opt) => (
        <option value={opt.value} className={cls.option} key={opt.value}>
          {opt.content}
        </option>
      ));
    }, [options]);

    const mods: Mods = {
      [cls.readonly]: readonly,
    };

    return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && <span className={cls.label}>{`${label}>`}</span>}
        <select
          value={value}
          onChange={onChangeHandler}
          disabled={readonly}
          className={cls.select}
        >
          {optionList}
        </select>
      </div>
    );
  }
);
