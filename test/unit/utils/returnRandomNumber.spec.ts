import { returnRandomNumber } from "../../../utils/returnRandomNumber";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("returnRandomNumber", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return a calculated value based on the input range", () => {
    vi.spyOn(Math, "random").mockReturnValue(46);

    // Calculation: Math.floor(46 * (10 - 5) + 5 => 5)
    const result = returnRandomNumber(5, 10);
    expect(result).toBe(235);
  });

  it("should return the minimum value when Math.random() returns 0", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    // Calculation: Math.floor(0 * (10 - 5) + 5 => 5)
    const result = returnRandomNumber(5, 10);
    expect(result).toBe(5);
  });

  it("should return the maximum minus 1 when Math.random() returns just under 1", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.99);

    // Calculation: Math.floor(0.99 * (10 - 5) + 5 => 7
    const result = returnRandomNumber(5, 10);
    expect(result).toBe(9);
  });

  it("should handle negative value for min", () => {
    vi.spyOn(Math, "random").mockReturnValue(4.6);

    // Calculation: Math.floor(4.6 * (5 - (-5))) + (-5) => floor(4.6 * 10) -5 => 41
    const result = returnRandomNumber(-5, 5);
    expect(result).toBe(41);
  });
});
