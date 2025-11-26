import { defu } from "defu";

export function returnFormattedDate(date: string, options?: Intl.DateTimeFormatOptions) {
    const mergedOptions: Intl.DateTimeFormatOptions = defu(options, { dateStyle: 'medium' } as Intl.DateTimeFormatOptions);
    // Adding these because granular options cannot go together with high-level presets
    if (mergedOptions.year || mergedOptions.month || mergedOptions.day) delete mergedOptions.dateStyle;
    if (mergedOptions.hour || mergedOptions.minute) delete mergedOptions.timeStyle;
    return new Date(date).toLocaleDateString("EN-AU", mergedOptions);
  }