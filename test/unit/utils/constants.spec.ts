import { CONSTANTS } from '../../../utils/constants'
import { describe, it, expect } from "vitest";

describe("constants", () => {
    it('It should return the correct variable from the constants file', () => {
        const result = CONSTANTS.capitalisedWords;
        expect(result).includes('QLD');
    });
});
