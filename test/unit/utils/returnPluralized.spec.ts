import { returnPluralized } from "../../../utils/returnPluralized";
import { describe, it, expect } from "vitest";

describe("returnPluralized", () => {
  let pluralized;

  it("should ignore empty word parameter", () => {
    pluralized = returnPluralized("", 4) as string;
    expect(pluralized).toBe("");

    pluralized = returnPluralized(" ", 6) as string;
    expect(pluralized).toBe("");
  });

  it("should pluralize basic word based on the reference counter", () => {
    pluralized = returnPluralized("document", 4) as string;
    expect(pluralized).toBe("documents");

    pluralized = returnPluralized("form", 1) as string;
    expect(pluralized).toBe("form");
  });

  it("should pluralize and capitalize basic word based on the reference counter", () => {
    pluralized = returnPluralized("product", 4, true) as string;
    expect(pluralized).toBe("Products");

    pluralized = returnPluralized("calculator", 1, true) as string;
    expect(pluralized).toBe("Calculator");
  });

  it("should pluralize special word (I, my, me) based on the reference counter", () => {
    pluralized = returnPluralized("i", 4) as string;
    expect(pluralized).toBe("we");

    pluralized = returnPluralized("my", 1) as string;
    expect(pluralized).toBe("my");
  });

  it("should pluralize and capitalize special word (I, my, me) based on the reference counter", () => {
    pluralized = returnPluralized("me", 4, true) as string;
    expect(pluralized).toBe("Us");

    pluralized = returnPluralized("my", 1, true) as string;
    expect(pluralized).toBe("My");
  });
});
