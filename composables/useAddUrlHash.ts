export function useAddUrlHash(hash: string) {
    const route = useRoute();
    navigateTo(`${route.path}#${hash}`, { replace: true });
}