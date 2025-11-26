export function convertArrayToDropdown(array: string[]) {
    const dropdown: DropDownOption[] = [];
    array.forEach((item) => {
        dropdown.push({
            id: crypto.randomUUID(),
            label: item,
            emit: item
        });
    });

    return dropdown;
}