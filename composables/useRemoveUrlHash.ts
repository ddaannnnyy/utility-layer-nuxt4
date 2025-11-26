export function useRemoveUrlHash() {
    const route = useRoute();
    return navigateTo(route.path, { replace: true });
}