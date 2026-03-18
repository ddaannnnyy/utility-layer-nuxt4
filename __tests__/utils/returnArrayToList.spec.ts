import { returnArrayToList } from "../../utils/returnArrayToList";
import { describe, it, expect } from "vitest";

describe("returnArrayToList", () => {
  it("should format the passed array of strings as a short list", () => {
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

  it("should handle single-item arrays correctly", () => {
    const result = returnArrayToList(["forms"]);
    expect(result).toBe("forms");
  });

  it("should return empty string for an empty array", () => {
    const result = returnArrayToList([]);
    expect(result).toBe("");
  });
});
