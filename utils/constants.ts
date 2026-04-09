/**
 * These are words that should always be capitalised when using returnCapitalized.
 * E.g. Instead of "I live in qld", or "I Live In Qld". This list is checked and returns the correct "I live in QLD"
 * By no means an exhaustive list, this is updated on a needs basis
 */
// const overrides: string[] = 
export const CONSTANTS = {
    capitalisedWords: [
        'QLD',
        'NSW',
        'ACT',
        'VIC',
        'SA',
        'WA',
        'TAS',
        'NT',
        'FAQ',
        'FAQs',
        'PDF',
        'PNG',
        'JPG',
        'GIF',
        'JPEG',
        'XML',
        'JSON',
        'YAML',
        'A11Y',
        'API',
        'B2B',
        'B2C',
        'CI/CD',
        ...useRuntimeConfig().public.capitalizeOverride as string[]
    ],

}