// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function returnArrayPick<T>(array: Array<Record<string, any>>, key: string | number) {
  return array.map((item) => item[key]).filter((item) => item) as Array<T>;
}
