// https://www.w3.org/TR/AERT/
const brightnessWeights = [299, 587, 114];

/**
 * Measures the brightness of a colour
 * @param color Hex colour without transparency `#xxxxxx`
 * @returns Brightness of the colour
 */
export function colorBrightness(color: string) {
  const match = color.match(
    /^#([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{1,2})$/
  );
  if (!match) {
    throw new Error(`${color} is not a hex code`);
  }

  const total = match
    .slice(1, 3) // Matched numbers
    .map(s => (s.length === 1 ? `${s}${s}` : s)) // Duplicate single letters, e.g. F -> FF
    .map(s => Number.parseInt(s, 16)) // Parse numbers
    .reduce((p, c, i) => p + c * brightnessWeights[i], 0); // Multiply by weight and sum

  return total / 1000;
}

const monthStrings = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

/**
 * Formats a date DD MMM YY
 * @param date Date to stringify
 */
export function dateStr(date: Date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthStrings[month]} '${year % 100}`;
}
