export function useRemoveUrlQuery(key: string) {
    const route = useRoute();
    const newQuery = { ...route.query };
    if (!newQuery[key]) console.warn(`No query with the key ${key} found.\r\nCurrent queries are ${Object.keys(route.query).toString()}`)
    delete newQuery[key];
    return navigateTo({ query: newQuery });
}