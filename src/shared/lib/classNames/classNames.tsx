export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  className: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    className,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(" ");
}
