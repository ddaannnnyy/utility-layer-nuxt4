import { returnRemoveSpecialCharacters } from "../../utils/returnRemoveSpecialCharacters";
import { describe, it, expect } from "vitest";

describe("returnRemoveSpecialCharacters", () => {
  it("should remove all special characters", () => {
    const input = "abc123!@#";
    const result = returnRemoveSpecialCharacters(input);
    expect(result).toBe("abc123");
  });

  it("should remove spaces and punctuation", () => {
    const input = "Welcome to WLTH! 46";
    const result = returnRemoveSpecialCharacters(input);
    expect(result).toBe("WelcometoWLTH46");
  });

  it("should return the same string if no special characters present", () => {
    const input = "Abc123";
    const result = returnRemoveSpecialCharacters(input);
    expect(result).toBe("Abc123");
  });

  it("should return an empty string if input has only special characters", () => {
    const input = "!@#$%^&*()_+-=";
    const result = returnRemoveSpecialCharacters(input);
    expect(result).toBe("");
  });

  it("should handle empty string input", () => {
    const input = "";
    const result = returnRemoveSpecialCharacters(input);
    expect(result).toBe("");
  });

  it("should handle value with mixed unicode characters", () => {
    const input = "abcé123@#";
    const result = returnRemoveSpecialCharacters(input);
    expect(result).toBe("abc123");
  });

  it("should replace the special characters with a specified character", () => {
    const input = "about-us";
    const result = returnRemoveSpecialCharacters(input, ' ');
    expect(result).toBe("about us")
  });

  it("should replace the special characters with a special character if requested", () => {
    const input = "about-us";
    const result = returnRemoveSpecialCharacters(input, '_');
    expect(result).toBe("about_us")
  });
});
