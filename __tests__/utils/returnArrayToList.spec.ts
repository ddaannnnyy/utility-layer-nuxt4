import { returnArrayToList } from "../../utils/returnArrayToList";
import { describe, it, expect } from "vitest";

describe("returnArrayToList", () => {
  it("should handle single-item arrays correctly", () => {
    const result = returnArrayToList(["forms"]);
    expect(result).toBe("forms");
  });

  it('should handle two item arrays correctly', () => {
    const result = returnArrayToList(["cats", "dogs"]);
    expect(result).toBe("cats and dogs");
  });

  it("should handle string arrays greater than 2", () => {
    const result = returnArrayToList(["dan", "ariel", "drei"]);
    expect(result).toEqual("dan, ariel and drei");
  });

  it("should format the passed array of strings as a short list (capitalized)", () => {
    const result = returnArrayToList(["dan", "ariel"], true);
    expect(result).toEqual("Dan and Ariel");
  });

  it("should capitalize correctly even when word casing is mixed", () => {
    const result = returnArrayToList(["NUXT", "VuE", "laraVEl"], true);
    expect(result).toBe("Nuxt, Vue and Laravel");
  });

  it("should return empty string for an empty array", () => {
    const result = returnArrayToList([]);
    expect(result).toBe("");
  });
  it.todo('should return undefined when array provided is undefined');
  it.todo('should return undefined when array provided is empty');
});
