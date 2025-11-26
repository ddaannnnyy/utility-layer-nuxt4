export function useRemoveUrlHash() {
    const route = useRoute();
    navigateTo(route.path, { replace: true });
}