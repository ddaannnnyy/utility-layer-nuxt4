import { returnEmailValidity } from "../../utils/returnEmailValidity";
import { describe, it, expect } from "vitest";

describe("returnEmailValidity", () => {
  it("should return true for valid email addresses", () => {
    const validEmails = [
      "john.doe123@example.com",
      "info-tech@company.org",
      "moto.ride+news@gmail.com",
      "contact@subdomain.web.co",
      "user_name@mail.net",
      "email-address@mail.net.co.au",
    ];

    validEmails.forEach((email) => {
      expect(returnEmailValidity(email)).toBe(true);
    });
  });

  it("should return false for invalid email addresses", () => {
    const invalidEmails = [
      "useremail",
      "user@domain",
      "user name@example.com",
      "@domain.com",
      "user@.com",
      "user@domain..com",
      "",
      " ",
      "user()@example.com",
      "user<>@example.com",
      "user,;@example.com",
      'user"@example.com',
      "user\name@example.com",
      "user@@example.com",
    ];

    invalidEmails.forEach((email) => {
      expect(returnEmailValidity(email)).toBe(false);
    });
  });
  it.todo('should return false for null or undefined email addresses')
});
