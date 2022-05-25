/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function(input) {
  return input.replace(/\s+(.)/g, function(match, group){
    return group.toUpperCase();
  })
};

module.exports = camelCase;

