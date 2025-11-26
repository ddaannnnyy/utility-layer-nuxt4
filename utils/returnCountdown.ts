export function returnCountdown(expiry: string | number | Date, start?: string | number | Date) {
  if (expiry === undefined) throw new Error("Expiry cannot be undefined");

  if (typeof expiry === "string" && isDateStringInvalid(expiry))
    throw new Error("Invalid expiry date time format");

  let countdown: Countdown;

  let startTime = new Date().getTime();

  if (start) {
    if (typeof start === "string" && isDateStringInvalid(start)) throw new Error("Invalid start date time format");
    startTime = new Date(start).getTime();
  }

  const expireTime = new Date(expiry).getTime();
  const originalDifferenceInMilliseconds = Math.abs(expireTime - startTime);
  let differenceInMilliseconds = originalDifferenceInMilliseconds;
  let differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInDays = Math.floor(differenceInSeconds / 86400);

  // resetting here lets it be used for the other conversions without
  // insanely long and annoying arithmatic
  differenceInSeconds -= differenceInDays * 86400;
  const differenceInHours = Math.floor(differenceInSeconds / 3600) % 24;
  differenceInSeconds -= differenceInHours * 3600;
  const differenceInMinutes = Math.floor(differenceInSeconds / 60) % 60;
  differenceInSeconds -= differenceInMinutes * 60;
  differenceInSeconds = Math.floor(differenceInSeconds % 60);

  const total: CountdownTotal = {
    days: originalDifferenceInMilliseconds / (1000 * 60 * 60 * 24),
    hours: originalDifferenceInMilliseconds / (1000 * 60 * 60),
    minutes: originalDifferenceInMilliseconds / (1000 * 60),
    seconds: originalDifferenceInMilliseconds / 1000
  };

  countdown = {
    start: startTime,
    expiry: expireTime,
    expired: startTime > expireTime,
    days: differenceInDays,
    hours: differenceInHours,
    minutes: differenceInMinutes,
    seconds: differenceInSeconds,
    total: total
  };

  return countdown;
}

function isDateStringInvalid(dateString: string): boolean {
  try {
    const dateTime = new Date(dateString).getTime();
    return dateTime ? false : true;
  } catch (err) {
    return true;
  }
}