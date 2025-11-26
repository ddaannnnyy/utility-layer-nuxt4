export function returnArrayPick<T>(array: Array<any>, key: string | number) {
  return array.map((item) => item[key]).filter((item) => item) as Array<T>;
}
