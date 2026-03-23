import { vi } from "vitest";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";

export function setupNuxtMocks() {
    mockNuxtImport("navigateTo", () => vi.fn());
    mockNuxtImport("useRoute", () => vi.fn());
    mockNuxtImport("useRouter", () => vi.fn());

    let navigateTo: ReturnType<typeof vi.fn>;
    let useRouteMock: ReturnType<typeof vi.fn>;
    let useRouterMock: ReturnType<typeof vi.fn>;

    async function reloadImports() {
        vi.resetAllMocks();
        const imports = await import("#imports");
        navigateTo = imports.navigateTo;
        useRouteMock = imports.useRoute;
        useRouterMock = imports.useRouter;

        return { navigateTo, useRouteMock, useRouterMock };
    }

    return {
        reloadImports,
        get navigateTo() {
            return navigateTo;
        },
        get useRouteMock() {
            return useRouteMock;
        },
        get useRouterMock() {
            return useRouterMock;
        },
    };
}
