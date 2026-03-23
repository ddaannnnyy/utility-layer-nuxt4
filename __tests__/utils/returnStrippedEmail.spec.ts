import { returnStrippedEmail } from "../../utils/returnStrippedEmail";
import { describe, it, expect } from "vitest";

describe("returnStrippedEmail", () => {
  it("should strip everything after + if present", () => {
    const email = "zykrl+bads@domain.com";
    const result = returnStrippedEmail(email);
    expect(result).toBe("zykrl");
  });

  it("should strip everything after @ if no + present", () => {
    const email = "zykrl@domain.com";
    const result = returnStrippedEmail(email);
    expect(result).toBe("zykrl");
  });

  it("should return empty string if + is at start", () => {
    const email = "+zykrl@domain.com";
    const result = returnStrippedEmail(email);
    expect(result).toBe("");
  });

  it("should return empty string if @ is at start and no +", () => {
    const email = "@domain.com";
    const result = returnStrippedEmail(email);
    expect(result).toBe("");
  });

  it("should handle email address with multiple + characters", () => {
    const email = "zykrl+alias+test@domain.com";
    const result = returnStrippedEmail(email);
    expect(result).toBe("zykrl");
  });

  it("should handle input with no @ symbol (edge case)", () => {
    const email = "zykrl";
    const result = returnStrippedEmail(email);
    expect(result).toBe("zykrl".substring(0, -1));
  });
});
