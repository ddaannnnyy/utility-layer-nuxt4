/***
 * Returns username from an email address.
 * E.g. `d.hebdon@wlth.com` returns d.hebdon
 * d.hebdon+additional@wlth.com returns d.hebdon
 */
export function returnStrippedEmail(email: string) {
    if (email.includes("+")) {
      return email.substring(0, email.indexOf("+"));
    } else {
      return email.substring(0, email.indexOf("@"));
    }
  }