import { describe, it, expect, vi, beforeEach } from "vitest";
import { setupNuxtMocks } from "../setup/setupNuxtMocks";

describe("useRemoveUrlQuery", async () => {
  const nuxtMocks = setupNuxtMocks();
  const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => { });

  let navigateTo: ReturnType<typeof vi.fn>;
  let useRouteMock: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    vi.resetAllMocks();
    ({ navigateTo, useRouteMock } = await nuxtMocks.reloadImports());
  });

  it("should warn when the specified query param does not exist", () => {
    useRouteMock.mockReturnValue({
      path: "/application/forms",
      query: { status: "pending", archived: "0" },
    });

    useRemoveUrlQuery("not_param");
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("No query with the key not_param found.")
    );

    expect(navigateTo).toHaveBeenCalledWith({
      query: { status: "pending", archived: "0" },
    });
  });

  it("should remove the specified query param and navigates with updated query", () => {
    useRouteMock.mockReturnValue({
      path: "/application/forms",
      query: { status: "pending", archived: "0" },
    });

    useRemoveUrlQuery("status");

    expect(navigateTo).toHaveBeenCalledWith({
      query: { archived: "0" },
    });
  });

  it("should warn when the query key does not exist", () => {
    useRouteMock.mockReturnValue({
      path: "/application/forms",
      query: {},
    });

    useRemoveUrlQuery("status");

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("No query with the key status found.")
    );

    expect(navigateTo).toHaveBeenCalledWith({ query: {} });
  });
});
