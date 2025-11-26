export function returnArrayToList(array: Array<string>, capitalise?: boolean) {
    if (capitalise) {
        const capitalizedArray = array.map(item => returnCapitalized(item.toLowerCase()) ?? '');
        return new Intl.ListFormat('en-AU', { style: 'short' }).format(capitalizedArray);
    } else return new Intl.ListFormat('en-AU', { style: 'short' }).format(array);
}