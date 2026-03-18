import { returnSlug } from "../../utils/returnSlug";
import { describe, it, expect } from "vitest";

describe("returnSlug", () => {
    let testPhrase, slug;
    it('It should return slug safe string', () => {
        testPhrase = 'Hello World, this is an unsafe title';
        slug = returnSlug(testPhrase);
        expect(slug).toBe('hello-world-this-is-an-unsafe-title');
    });
    it('it should not modify already safe slugs', () => {
        testPhrase = 'test-slug';
        slug = returnSlug(testPhrase);
        expect(slug).toEqual(testPhrase);
    });
    it('should return empty string when provided empty string', () => {
        testPhrase = " ";
        slug = returnSlug(testPhrase);
        expect(slug).toBe('')
    });
    it('should strip illegal leading or trailing special characters', () => {
        testPhrase = "___test___";
        slug = returnSlug(testPhrase);
        expect(slug).toBe('test');
    });
    it('should strip illegal leading or trailing special characters but still create a split slug', () => {
        testPhrase = "---test---test---";
        slug = returnSlug(testPhrase);
        expect(slug).toBe('test-test');
    });
    it('should strip illegal unicode characters safely', () => {
        testPhrase = 'café a lait';
        slug = returnSlug(testPhrase);
        expect(slug).toBe('caf-a-lait')
    })
})