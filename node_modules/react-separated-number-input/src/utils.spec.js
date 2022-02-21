import {
  groupCharacters,
  removeNonNumericChars,
} from './utils';

describe('groupCharacters()', () => {
  it('returns nothing given nothing', () => {
    const result = groupCharacters('');

    expect(result).toEqual(['']);
  });

  it('returns empty array given empty string', () => {
    const result = groupCharacters('', [2, 2, 4]);

    expect(result).toEqual(['']);
  });

  it('returns one group given no groupLengths', () => {
    const result = groupCharacters('12345678');

    expect(result).toEqual(['12345678']);
  });

  it('groups characters properly given groupLengths', () => {
    const result = groupCharacters('12345678', [2, 2, 4]);

    expect(result).toEqual(['12', '34', '5678']);
  });

  it('ignores the characters above the sum of groupLengths', () => {
    const result = groupCharacters('1234567890', [2, 2, 4]);

    expect(result).toEqual(['12', '34', '5678']);
  });
});

describe('removeNonNumericChars()', () => {
  it('returns nothing given nothing', () => {
    const result = removeNonNumericChars();

    expect(result).toBe(undefined);
  });

  it('returns empty string given empty string', () => {
    const result = removeNonNumericChars('');

    expect(result).toBe('');
  });

  it('removes non-numeric characters properly', () => {
    const result = removeNonNumericChars('12ac34ąć56AC');

    expect(result).toBe('123456');
  });
});
