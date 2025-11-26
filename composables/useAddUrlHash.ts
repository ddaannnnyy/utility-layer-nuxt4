export function useAddUrlHash(hash: string) {
    const route = useRoute();
    return navigateTo(`${route.path}#${hash}`, { replace: true });
}