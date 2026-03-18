import { returnCapitalized } from "../../utils/returnCapitalized";
import { describe, it, expect } from "vitest";

describe("returnCapitalized", () => {
  let capitalized;

  it("should ignore empty word parameter", () => {
    capitalized = returnCapitalized("") as string;
    expect(capitalized).toBe("");

    capitalized = returnCapitalized(" ") as string;
    expect(capitalized).toBe(" ");
  });

  it("should capitalize valid word", () => {
    capitalized = returnCapitalized("enigma") as string;
    expect(capitalized).toBe("Enigma");

    capitalized = returnCapitalized("initial") as string;
    expect(capitalized).toBe("Initial");
  });

  it("should handle multiple words", () => {
    capitalized = returnCapitalized("kieran zykrl", false) as string;
    expect(capitalized).toBe("Kieran Zykrl");

    capitalized = returnCapitalized("andrei duero jr.", false) as string;
    expect(capitalized).toBe("Andrei Duero Jr.");

    capitalized = returnCapitalized(
      "the quick brown dog jumps over the lazy fox"
    ) as string;
    expect(capitalized).toBe("The quick brown dog jumps over the lazy fox");
  });

});
