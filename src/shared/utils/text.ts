/**
 * Uppercase the first character of a string
 * @param text The text to uppercase
 * @example `
 * "loren ipsum...." //=> "Loren ipsum..."
 * "LOREN ipsum...." //=> "LOREN ipsum..."
 * "lOREN IPSUM...." //=> "LOREN IPSUM..."
 * `
 */
export function capitalize(text: string): string {
  if (typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Returns the incremental from a text, obtaining the last number of the "text" field
 * If it ends with a number, return a sum of the "value + 1", else return "1"
 * @param text The text to check
 * @example `
 * "task 634" //=> 635
 * "task 1" //=> 2
 * "example task" //=> 1
 * "123 task" //=> 1
 * `
 */
export function getIncremental(text: string): number {
  let result = 1;

  if (text && text.length > 0) {
    try {
      const lastNumbers = text.match(/\d+$/)[0];
      const number = parseInt(lastNumbers);
      if (number > 0) {
        result = number + 1;
      }
    } catch (error) {
      result = 1;
    }
  }

  return result;
}

/**
 * Remove the the points of a string, capitalising each piece founded
 * @param text The text to check
 * @example `
 * "name.surname"  //=> "Name Surname"
 * "aaa.bbb.ccc.ddd"  //=> "Aaa Bbb Ccc Ddd"
 * "latitude"  //=> "Latitude"
 * `
 */
export function humanizePoints(text: string): string {
  let result = '';

  if (text) {
    const pieces: string[] = text.split('.');

    const piecesUpper: string[] = pieces.map((piece: string) => {
      return capitalize(piece);
    });

    result = piecesUpper.join(' ');
  }

  return result;
}

const TextUtils = {
  capitalize,
  getIncremental,
  humanizePoints
};

export default TextUtils;
