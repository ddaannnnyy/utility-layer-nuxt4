// useRouteCheck("/about") <-- returns true or false if /about exists.

export function useRouteCheck(path: string) {
    const router = useRouter();
    const allRoutes = router.getRoutes();

    const lookup = allRoutes.find((route) => route.path === path);

    if (lookup) {
        return true;
    } else return false;
}