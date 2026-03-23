import { CONSTANTS } from "../../utils/constants"
import { describe, it, expect } from "vitest";

describe("constants", () => {
    it('It should return the correct variable from the constants file', () => {
        const result = CONSTANTS.capitalisedWords;
        expect(result).includes('QLD');
    });
    it('It should accept overrides provided through runtime variables', () => {
        const overrides = useRuntimeConfig().public.capitalizeOverride as string[];
        const defaults = CONSTANTS.capitalisedWords;
        expect(defaults).includes(overrides[0]);
    });
});
