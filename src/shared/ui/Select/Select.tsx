import { Mods, classNames } from "shared/lib/classNames/classNames";
import { ChangeEvent, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}
export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
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
};
