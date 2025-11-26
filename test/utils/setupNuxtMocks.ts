import { vi } from "vitest";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";

/**
 * Sets up Nuxt composable mocks for tests that use useRoute() and navigateTo().
 *
 * Usage:
 *   const { navigateTo, useRouteMock, reloadImports } = setupNuxtMocks()
 *   await reloadImports()
 */
export function setupNuxtMocks() {
    // Declare mocks once
    mockNuxtImport("navigateTo", () => vi.fn());
    mockNuxtImport("useRoute", () => vi.fn());
    mockNuxtImport("useRouter", () => vi.fn());

    // Hold references for later
    let navigateTo: ReturnType<typeof vi.fn>;
    let useRouteMock: ReturnType<typeof vi.fn>;
    let useRouterMock: ReturnType<typeof vi.fn>;

    /**
     * Reloads Nuxt auto-imports and grabs the mocked composables.
     * Must be called after each test reset (e.g. inside beforeEach()).
     */
    async function reloadImports() {
        vi.resetAllMocks();
        const imports = await import("#imports");
        navigateTo = vi.mocked(imports.navigateTo);
        useRouteMock = vi.mocked(imports.useRoute);
        useRouterMock = vi.mocked(imports.useRouter);

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