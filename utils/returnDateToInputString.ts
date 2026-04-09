export function returnDateToInputString(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedYear = new Intl.NumberFormat('en-AU', { minimumIntegerDigits: 2, useGrouping: false }).format(year);
    const formattedMonth = new Intl.NumberFormat('en-AU', { minimumIntegerDigits: 2, useGrouping: false }).format(month);
    const formattedDay = new Intl.NumberFormat('en-AU', { minimumIntegerDigits: 2, useGrouping: false }).format(day);

    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
}