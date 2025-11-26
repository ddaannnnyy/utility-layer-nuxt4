// www.website.com?query=queryText <-- adds query to the url
// also safe for multi www.website.com?filter=any&search=hello

export function useAddUrlQuery(query: Record<string, string>) {
    const route = useRoute();
    const newQuery = { ...route.query, ...query };
    return navigateTo({ query: newQuery });
}