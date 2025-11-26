import { returnCapitalized } from "../../../utils/returnCapitalized";
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

  it('It should always capitalise reserved words in a sentence', () => {
    capitalized = returnCapitalized('i live in qld', false) as string;
    expect(capitalized).toBe('I Live In QLD');
  });

  it('It should always capitalise reserved words in a single word', () => {
    capitalized = returnCapitalized('pdf') as string;
    expect(capitalized).toBe('PDF');
  });

  it('It should always capitalise reserved words with mixed casing', () => {
    capitalized = returnCapitalized('Jpeg') as string;
    expect(capitalized).toBe('JPEG');
  });

});
