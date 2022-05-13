/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function(input, caze) {
  if (typeof caze !== 'object') caze = [caze];

  if (caze.length > 1) {
    const sortingArr = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
    caze.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
  }

  for (const style of caze) {

    switch (style) {

    case 'camel':
      input = input.replace(/\s\w/g, char => char.toUpperCase()).replace(/\s/g, '');
      break;

    case 'pascal':
      input = input.replace(/\b\w/g, char => char.toUpperCase()).replace(/\s/g, '');
      break;

    case 'snake':
      input = input.replace(/\s/g, '_');
      break;

    case 'kebab':
      input = input.replace(/\s/g, '-');
      break;

    case 'title':
      input = input.replace(/\b\w/g, char => char.toUpperCase());
      break;

    case 'vowel':
      input = input.replace(/[aeiou]/gi, char => char.toUpperCase());
      break;

    case 'consonant':
      input = input.replace(/[^aeiou]/gi, char => char.toUpperCase());
      break;

    case 'upper':
      input = input.toUpperCase();
      break;

    case 'lower':
      input = input.toLowerCase();
      break;
    }
  }

  return input;
}

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

