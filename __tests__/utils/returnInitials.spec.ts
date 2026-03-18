import { returnInitials } from "../../utils/returnInitials";
import { describe, it, expect } from "vitest";

describe("returnInitials", () => {
  it("should return the initials in uppercase by default", () => {
    const result = returnInitials(["kieran", "zykrl"]);
    expect(result).toBe("KZ");
  });

  it("should return the initials in lowercase if uppercase param is set to false", () => {
    const result = returnInitials(["kieran", "zykrl"], false);
    expect(result).toBe("kz");
  });

  it("should handle single-word input", () => {
    const result = returnInitials(["zykrl"]);
    expect(result).toBe("Z");
  });

  it("should handle empty input array", () => {
    const result = returnInitials([]);
    expect(result).toBe("");
  });

  it("should handle words with empty strings", () => {
    const result = returnInitials(["zykrl", "", "Kier"]);
    expect(result).toBe("ZK");
  });

  it("should handle words with single characters", () => {
    const result = returnInitials(["K", "Z"]);
    expect(result).toBe("KZ");
  });

  it("should handle words that are empty strings only", () => {
    const result = returnInitials(["", ""]);
    expect(result).toBe("");
  });
});
