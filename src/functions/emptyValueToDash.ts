export default function emptyValueToDash(value: string): string {
  return value === "0" ? "-" : value;
}
