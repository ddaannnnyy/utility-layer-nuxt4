import { returnDaysSince } from "../../utils/returnDaysSince";
import { describe, it, expect, afterEach, vi } from "vitest";

describe("returnDaysSince", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should calculate correct number of days from a past date and the "current" date', () => {
    const today = new Date("2025-10-15T00:00:00Z").valueOf();
    vi.useFakeTimers().setSystemTime(today);

    const pastDate = new Date("2025-10-10T00:00:00Z");
    const result = returnDaysSince(pastDate);

    expect(Math.floor(result)).toBe(5);
  });

  it("should accept string date as input", () => {
    const today = new Date("2025-10-15T00:00:00Z").valueOf();
    vi.useFakeTimers().setSystemTime(today);

    const result = returnDaysSince("2025-10-12T00:00:00Z");
    expect(Math.floor(result)).toBe(3);
  });

  it("should return 0 when date is now", () => {
    const today = new Date("2025-10-14T00:00:00Z").valueOf();
    vi.useFakeTimers().setSystemTime(today);

    const result = returnDaysSince("2025-10-14T00:00:00Z");
    expect(Math.floor(result)).toBe(0);
  });
  it.todo('should return a negative number when date supplied is in the future');
  it.todo('should return when provided invalid date');
  it.todo('should work with any valid date supplied. E.g. string, number, Date');
});
