export function returnDaysSince(date: string | Date): number {
    const endDate = new Date(date);
    const now = new Date();
    const differenceInDays =
      Math.abs(now.valueOf() - endDate.valueOf()) / (1000 * 60 * 60 * 24);
    return differenceInDays;
  }