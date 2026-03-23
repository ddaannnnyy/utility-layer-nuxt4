import { returnCurrencyFormat } from "../../utils/returnCurrencyFormat";
import { describe, it, expect } from "vitest";

describe("returnCurrencyFormat", () => {
  it("should format passed value as AUD currency by default", () => {
    const result = returnCurrencyFormat(1234);
    expect(result).toBe("$1,234.00");
  });

  it("should format a numeric string input as AUD currency", () => {
    const result = returnCurrencyFormat("5678.13");
    expect(result).toBe("$5,678.13");
  });

  it("should apply the specified custom option", () => {
    const result = returnCurrencyFormat(1234, { minimumFractionDigits: 0 });
    expect(result).toBe("$1,234");
  });

  it("should return the original input if it is not a valid number", () => {
    const result = returnCurrencyFormat("abc");
    expect(result).toBe("abc");

    const result2 = returnCurrencyFormat("12ab");
    expect(result2).toBe("12ab");
  });

  it("should return undefined if no amount provided", () => {
    const result = returnCurrencyFormat();
    expect(result).toBeUndefined();
  });
  it.todo("should successfully format negative numbers");
  it.todo("should correctly update currency when passed alternative parameters");
});
