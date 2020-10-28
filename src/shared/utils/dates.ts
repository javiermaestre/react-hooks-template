import parseISO from 'date-fns/parseISO';
import formatISO from 'date-fns/formatISO';
import formatInternal from 'date-fns/format';
import addSeconds from 'date-fns/addSeconds';

const DEFAULT_FORMAT = 'dd MMM yyyy';

/**
 * Returns the actual time
 */
export function now(): string {
  return formatISO(new Date());
}

/**
 * Returns a `Date` object transforming from `ISO 8601` string
 * @param date `string` The date string to transform
 */
export function getDate(date: string): Date {
  return parseISO(date);
}

/**
 * Returns a formated date from a string date
 * @param date The string date to format
 * @example Return example: `25 Jul 2019`, `08 Aug 2017`, `26 Jan 0096`
 */
export function format(date: string): string {
  return formatInternal(getDate(date), DEFAULT_FORMAT);
}

export default {
  now,
  getDate,
  format,
  addSeconds
};
