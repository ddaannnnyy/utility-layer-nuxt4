import { describe, it, expect, vi, beforeEach } from "vitest";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";

describe("useRemoveUrlHash", async () => {
  mockNuxtImport("navigateTo", () => vi.fn());

  const { navigateTo } = await import("#imports");
  const { useRemoveUrlHash } = await import(
    "../../composables/useRemoveUrlHash"
  );

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should remove the hash value/keyword in the URL", async () => {
    mockNuxtImport("useRoute", () => () => ({ path: "/account#profile" }));

    useRemoveUrlHash();
    expect(navigateTo).toHaveBeenCalledWith("/account", {
      replace: true,
    });
  });

  it("should handle a URL with no hash (path only)", async () => {
    mockNuxtImport("useRoute", () => () => ({ path: "/account" }));

    useRemoveUrlHash();
    expect(navigateTo).toHaveBeenCalledWith("/account", {
      replace: true,
    });
  });
});
