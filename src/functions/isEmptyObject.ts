export default function isEmpty(object: object): boolean {
  for (const key in object) {
    return false;
  }

  return true;
}
