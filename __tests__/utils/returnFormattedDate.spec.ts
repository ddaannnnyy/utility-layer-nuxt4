import { returnFormattedDate } from "../../utils/returnFormattedDate";
import { describe, it, expect } from "vitest";

describe("returnFormattedDate", () => {
  let formattedDate, expectedFormattedDate;
  it("should format a date using default 'medium' style", () => {
    formattedDate = returnFormattedDate("2025-10-14T00:00:00Z");
    expectedFormattedDate = new Date(
      "2025-10-14T00:00:00Z"
    ).toLocaleDateString("EN-AU", { dateStyle: "medium" });

    expect(formattedDate).toBe(expectedFormattedDate);
  });

  it("should merge passed format options and return a formatted date", () => {
    formattedDate = returnFormattedDate("2025-10-14T00:00:00Z", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    expectedFormattedDate = new Date(
      "2025-10-14T00:00:00Z"
    ).toLocaleDateString("EN-AU", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    expect(formattedDate).toBe(expectedFormattedDate);
  });
  it('should not error when string cannot be parsed', () => {
    formattedDate = returnFormattedDate('not-a-date');
    expectedFormattedDate = 'Invalid Date';
    expect(formattedDate).toBe(expectedFormattedDate);
  });
});
