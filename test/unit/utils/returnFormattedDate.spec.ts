import { returnFormattedDate } from "../../../utils/returnFormattedDate";
import { describe, it, expect } from "vitest";

describe("returnFormattedDate", () => {
  it("should format a date using default 'medium' style", () => {
    const formattedDate = returnFormattedDate("2025-10-14T00:00:00Z");
    const expectedFormattedDate = new Date(
      "2025-10-14T00:00:00Z"
    ).toLocaleDateString("EN-AU", { dateStyle: "medium" });
    expect(formattedDate).toBe(expectedFormattedDate);
  });

  it("should merge passed format options and return a formatted date", () => {
    const formattedDate = returnFormattedDate("2025-10-14T00:00:00Z", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    const expectedFormattedDate = new Date(
      "2025-10-14T00:00:00Z"
    ).toLocaleDateString("EN-AU", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    expect(formattedDate).toBe(expectedFormattedDate);
  });
});
