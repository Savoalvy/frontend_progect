type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[],
): string {
  const modsNormalized = mods ?? {};
  const additionalNormalized = additional ?? [];

  return [
    cls,
    ...additionalNormalized.filter(Boolean),
    ...Object.entries(modsNormalized)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
