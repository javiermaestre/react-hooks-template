/**
 * Returns the URL for a file on public folder
 * Path shouldn't start with `/`
 * @param path The path to the image
 */
export function getPublicURL(path: string): string {
  return `${process.env.PUBLIC_URL}/${path}`;
}
