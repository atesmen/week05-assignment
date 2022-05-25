/*In this exercise, we will be printing multiplication tables to the console.

Multiplication Table
We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

Instruction
Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.
*/

const multiplicationTable = function(maxValue) {
  let i = '';
  for(let y = 1; y<=maxValue; y++){
    for(let x = 1; x <=maxValue; x++){
      i += y * x + ' ';
    }
    i += '\n';
  }
  return i;
};

module.exports = multiplicationTable;