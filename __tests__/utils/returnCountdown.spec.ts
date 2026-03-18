import { returnCountdown } from "../../utils/returnCountdown";
import { describe, it, expect, vi } from "vitest";

describe("returnCountdown", () => {
  it("should throw an error if expiry is undefined", () => {
    // @ts-expect-error
    expect(() => returnCountdown(undefined)).toThrowError(
      "Expiry cannot be undefined"
    );
  });

  it("should throw an error if passed date's format is invalid", () => {
    expect(() => returnCountdown("15/10/2025")).toThrowError(
      "Invalid expiry date time format"
    );

    expect(() => returnCountdown("10/10/2025", "15/10/2025")).toThrowError(
      "Invalid start date time format"
    );
  });

  it("should calculate countdown based on the expiry and start dates", () => {
    const start = "2025-10-10T00:00:00Z";
    const expiry = "2025-10-12T03:30:45Z";

    const result = returnCountdown(expiry, start);

    // Expected difference:
    // 2 days, 3 hours, 30 minutes, 45 seconds
    expect(result.days).toBe(2);
    expect(result.hours).toBe(3);
    expect(result.minutes).toBe(30);
    expect(result.seconds).toBe(45);

    expect(result.expired).toBe(false);
  });

  it("should return expired=true if start is after expiry date", () => {
    const start = "2025-10-12T12:00:00Z";
    const expiry = "2025-10-10T00:00:00Z";

    const result = returnCountdown(expiry, start);
    expect(result.expired).toBe(true);
  });

  it("should calculate countdown relative to current time if start not specified", () => {
    vi.useFakeTimers().setSystemTime(new Date("2025-10-10T00:00:00Z"));

    const expiry = "2025-10-11T00:00:00Z";
    const result = returnCountdown(expiry);

    expect(result.days).toBe(1);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    vi.useRealTimers();
  });

  it("should handle numeric timestamps", () => {
    const start = new Date("2025-10-10T00:00:00Z").getTime();
    const expiry = new Date("2025-10-10T01:00:00Z").getTime();

    const result = returnCountdown(expiry, start);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it("should correctly compute the total values", () => {
    const start = "2025-10-10T00:00:00Z";
    const expiry = "2025-10-11T00:00:00Z";

    const result = returnCountdown(expiry, start);

    expect(result.total.days).toBe(1);
    expect(result.total.hours).toBe(24);
    expect(result.total.minutes).toBe(1440);
    expect(result.total.seconds).toBe(86400);
  });

  it("should handle numeric timestamps returned by Date.now()", () => {
    const start = Date.now();
    const duration = 1000 * 60 * 60 * 5; // 5 hours
    const expiry = start + duration;

    const result = returnCountdown(expiry, start);

    expect(result.days).toBe(0);
    expect(result.hours).toBe(5);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
    expect(result.expired).toBe(false);
  });
});
