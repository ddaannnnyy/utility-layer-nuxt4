import { describe, it, expect, vi, beforeEach } from "vitest";
import { setupNuxtMocks } from "../../utils/setupNuxtMocks";

describe("useAddUrlQuery", async () => {
  const nuxtMocks = setupNuxtMocks();
  const { useAddUrlQuery } = await import("../../../composables/useAddUrlQuery");

  let navigateTo: ReturnType<typeof vi.fn>;
  let useRouteMock: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    vi.resetAllMocks();
    ({ navigateTo, useRouteMock } = await nuxtMocks.reloadImports());
  });

  it("should append new query params with existing ones", () => {
    useRouteMock.mockReturnValue({
      path: "/application/forms",
      query: { status: "pending" },
    });

    useAddUrlQuery({ archived: "0" });
    expect(navigateTo).toHaveBeenCalledWith({
      query: { status: "pending", archived: "0" },
    });
  });

  it("should replace current query params that exists", () => {
    useRouteMock.mockReturnValue({
      path: "/application/forms",
      query: { status: "pending" },
    });

    useAddUrlQuery({ status: "completed" });

    expect(navigateTo).toHaveBeenCalledWith({
      query: { status: "completed" },
    });
  });

  it("should handle empty input query", () => {
    useRouteMock.mockReturnValue({
      path: "/application/forms",
      query: { status: "pending" },
    });

    useAddUrlQuery({});
    expect(navigateTo).toHaveBeenCalledWith({
      query: { status: "pending" },
    });
  });
});
