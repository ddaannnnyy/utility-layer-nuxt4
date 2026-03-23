import { returnPercentageThrough } from "../../utils/returnPercentageThrough";
import { describe, it, expect, vi } from "vitest";

describe("returnPercentageThrough", () => {
  it("should return 0% when target date is before start date", () => {
    const result = returnPercentageThrough(
      "2025-10-10",
      "2025-10-20",
      "2025-10-05"
    );
    expect(result).toBe(0);
  });

  it("should return 100% when target date is after end date", () => {
    const result = returnPercentageThrough(
      "2025-10-10",
      "2025-10-20",
      "2025-10-25"
    );
    expect(result).toBe(100);
  });

  it("should return 50% when target date is halfway between start and end", () => {
    const result = returnPercentageThrough(
      "2025-10-10",
      "2025-10-20",
      "2025-10-15"
    );
    expect(result).toBe(50);
  });

  it("should default to current date if no target date is provided", () => {
    const fakeNow = new Date("2025-10-15T00:00:00Z").getTime();
    vi.useFakeTimers();
    vi.setSystemTime(fakeNow);

    const result = returnPercentageThrough("2025-10-10", "2025-10-20");
    expect(result).toBeCloseTo(50);

    vi.useRealTimers();
  });
});
