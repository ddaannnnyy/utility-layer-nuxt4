export function returnEmailValidity(email?: string) {
  return !!String(email)
    .toLowerCase()
    .match(
      /^[\w.!#$%&'*+/=?^`{|}~-]+@([a-z\d-]+\.)+[a-z]{2,}$/i
    );
}