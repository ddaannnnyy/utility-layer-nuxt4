import { describe, it, expect, vi, beforeEach } from "vitest";
import { setupNuxtMocks } from "../../utils/setupNuxtMocks";

describe("useRouteCheck", async () => {
  const nuxtMocks = setupNuxtMocks();
  const { useRouteCheck } = await import("../../../composables/useRouteCheck");

  let useRouterMock: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    vi.resetAllMocks();
    ({ useRouterMock } = await nuxtMocks.reloadImports());
  });

  it("should return true if route exists", () => {
    useRouterMock.mockReturnValue({
      getRoutes: vi
        .fn()
        .mockReturnValue([
          { path: "/account" },
          { path: "/application/forms" },
          { path: "/calculators" },
        ]),
    });

    const exists = useRouteCheck("/account");
    expect(exists).toBe(true);
  });

  it("should return false if route does not exist", () => {
    useRouterMock.mockReturnValue({
      getRoutes: vi
        .fn()
        .mockReturnValue([
          { path: "/account" },
          { path: "/application/forms" },
          { path: "/calculators" },
        ]),
    });

    const exists = useRouteCheck("/chicken");
    expect(exists).toBe(false);
  });

  it("should return false if router returns an empty route list", () => {
    useRouterMock.mockReturnValue({
      getRoutes: vi.fn().mockReturnValue([]),
    });

    const exists = useRouteCheck("/account");
    expect(exists).toBe(false);
  });
});
