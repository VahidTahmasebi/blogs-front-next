export default function toLocalDate(date) {
  return new Date(date).toLocalDateString("en-us");
}
