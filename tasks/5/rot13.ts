/**
 * How can you tell an extrovert from an introvert at NSA?
 * Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
 *
 * I found this joke on USENET, but the punchline is scrambled. Maybe you can
 * decipher it?
 * According to Wikipedia, ROT13 is frequently used to obfuscate jokes on
 * USENET.
 * For this task you're only supposed to substitute characters. Not spaces,
 * punctuation, numbers, etc.
 *
 * Test examples:
 *
 * "EBG13 rknzcyr." -> "ROT13 example."
 *
 * "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

// const rot13ChairList;

function changeChar(char: number, start: number): string {
  if (char >= start && char < start + 13) {
    return String.fromCharCode(char + 13);
  } else {
    return String.fromCharCode(char - 13);
  }
}

export function rot13(str: string): string {
  const startUpperChar = 65;
  const endUpperChar = 90;
  const startLowerChar = 97;
  const endLowerChar = 122;

  const result = [...str].reduce((acc, char) => {
    const charCode = char.charCodeAt(0);

    if (charCode >= startUpperChar && charCode <= endUpperChar) {
      return acc + changeChar(charCode, startUpperChar);
    }

    if (charCode >= startLowerChar && charCode <= endLowerChar) {
      return acc + changeChar(charCode, startLowerChar);
    }

    return acc + char;
  }, '');

  return result;
}

console.log(rot13('EBG13 rknzcyr.'));
console.log(
  rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf")
);
