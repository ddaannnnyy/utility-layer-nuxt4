import { returnArrayPick } from "../../utils/returnArrayPick";
import { describe, it, expect } from "vitest";

describe("returnArrayPick", () => {
  const users = [
    { id: 1, name: "Dan", email: "dan@wlth.com" },
    { id: 2, name: "Ariel", email: "ariel@wlth.com" },
    { id: 3, name: "Drei", email: "drei@wlth.com" },
  ];

  describe("returnArrayPick", () => {
    it('should pick the "name" property from the array', () => {
      const names = returnArrayPick<string>(users, "name");
      expect(names).toEqual(["Dan", "Ariel", "Drei"]);
    });

    it('should pick the "id" property from the array', () => {
      const ids = returnArrayPick<number>(users, "id");
      expect(ids).toEqual([1, 2, 3]);
    });

    it("should return an empty array if no items contain the key", () => {
      const nonExistent = returnArrayPick<undefined>(users, "z");
      expect(nonExistent).toEqual([]);
    });

    it("should only return the items that contain the key", () => {
      const staff = [
        { id: 1, name: "Dan", email: "dan@wlth.com" },
        { id: 2, name: "Ariel" },
        { id: 3, name: "Drei", email: "drei@wlth.com" },
      ];
      const nonExistent = returnArrayPick<undefined>(staff, "email");
      expect(nonExistent).toEqual(["dan@wlth.com", "drei@wlth.com"]);
    });

    it("should return an empty array when the array is empty", () => {
      const result = returnArrayPick<string>([], "name");
      expect(result).toEqual([]);
    });
    it.todo('should not filter out falsy data');
    it.todo('should not filter out undefined data');
    it.todo('should filter data if parameter is set for falsy data');
    it.todo('should filter data if parameter is set for undefined data');
  });
});
