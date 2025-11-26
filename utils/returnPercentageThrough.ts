export function returnPercentageThrough(startDate: string | number | Date, endDate: string | number | Date, targetDate?: string | number | Date) {
    try {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        let target = new Date().getTime();

        // defaults to now, re-assigns if target date is provided
        if (targetDate) {
            target = new Date(targetDate).getTime();
        }
        const duration = end - start;
        const elapsed = target - start;

        const percentage = (elapsed / duration) * 100;

        return Math.max(0, Math.min(100, percentage));

    } catch (error) {
        throw error;
    }
}