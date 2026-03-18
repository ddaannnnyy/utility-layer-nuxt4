import { describe, it, expect, vi, beforeEach } from "vitest";
import { setupNuxtMocks } from "~/test/setup/setupNuxtMocks";

describe("useAddUrlHash", async () => {
  const nuxtMocks = setupNuxtMocks();
  const { useAddUrlHash } = await import("../../composables/useAddUrlHash");

  let navigateTo: ReturnType<typeof vi.fn>;
  let useRouteMock: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    vi.resetAllMocks();
    ({ navigateTo, useRouteMock } = await nuxtMocks.reloadImports());
  });

  it("should append a hash value/keyword to the current URL", () => {
    useRouteMock.mockReturnValue({ path: "/account" });

    useAddUrlHash("contact");
    expect(navigateTo).toHaveBeenCalledWith("/account#contact", {
      replace: true,
    });
  });

  it("should replace the hash if called multiple times", () => {
    useRouteMock.mockReturnValue({ path: "/account" });

    useAddUrlHash("profile");
    useAddUrlHash("settings");

    expect(navigateTo).toHaveBeenCalledTimes(2);
    expect(navigateTo).toHaveBeenNthCalledWith(1, "/account#profile", {
      replace: true,
    });
    expect(navigateTo).toHaveBeenNthCalledWith(2, "/account#settings", {
      replace: true,
    });
  });
});
