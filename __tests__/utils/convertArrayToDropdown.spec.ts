import { convertArrayToDropdown } from "../../utils/convertArrayToDropdown";
import { describe, it, expect, vi } from "vitest";

type UUID = `${string}-${string}-${string}-${string}-${string}`;

describe("convertArrayToDropdown", () => {
  it("should convert string array into dropdown options", () => {

    // Mock the return of randomUUID
    const mockUUID = vi.spyOn(globalThis.crypto, "randomUUID")
      .mockReturnValue("0000-0000-0000-0000-0000" as UUID);


    const inputArray = ["Forms", "Documents", "Tools", "Calculators"];

    const result = convertArrayToDropdown(inputArray);
    expect(result).toEqual([
      {
        id: "0000-0000-0000-0000-0000", label: "Forms", emit: "Forms"
      },
      {
        id: "0000-0000-0000-0000-0000", label: "Documents", emit: "Documents"
      },
      {
        id: "0000-0000-0000-0000-0000", label: "Tools", emit: "Tools"
      },
      {
        id: "0000-0000-0000-0000-0000", label: "Calculators", emit: "Calculators",
      },
    ]);
    mockUUID.mockRestore();
  });

  it("should return an empty array when input is empty", () => {
    const mockUUID = vi.spyOn(globalThis.crypto, "randomUUID");
    const result = convertArrayToDropdown([]);
    expect(result).toEqual([]);
    expect(mockUUID).not.toHaveBeenCalled();
  });

  it("should make sure that unique IDs are generated", () => {
    const uuids = [
      "0000-0000-0046-0000-0001",
      "0000-0000-0046-0000-0002",
      "0000-0000-0046-0000-0003",
    ];
    const mockUUID = vi.spyOn(globalThis.crypto, "randomUUID")
      .mockImplementation(() => uuids.shift() as UUID);

    const input = ["Red", "Green", "Blue"];
    const result = convertArrayToDropdown(input);

    expect(result).toEqual([
      { id: "0000-0000-0046-0000-0001", label: "Red", emit: "Red" },
      { id: "0000-0000-0046-0000-0002", label: "Green", emit: "Green" },
      { id: "0000-0000-0046-0000-0003", label: "Blue", emit: "Blue" },
    ]);

    mockUUID.mockRestore();
  });
});
