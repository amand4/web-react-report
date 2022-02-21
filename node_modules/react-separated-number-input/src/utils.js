/**
 * Splits string into pieces of defined lengths.
 *
 * @param {*} string
 * @param {*} groupLengths
 */
export function groupCharacters(string, groupLengths) {
  if (!string || !groupLengths) {
    return [string];
  }

  let i = 0;
  const result = [];
  groupLengths.forEach((groupLength) => {
    const characterGroup = string && string.slice(i, i + groupLength);
    if (characterGroup) {
      result.push(characterGroup);
    }
    i += groupLength;
  });

  return result;
}

export function removeNonNumericChars(string) {
  if (!string) {
    return string;
  }

  return string.replace(/[^\d]/g, '');
}

export function sum(arr) {
  return arr.reduce((res, el) => res + el, 0);
}
