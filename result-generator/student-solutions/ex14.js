/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function(total, cash) {
  let change = {};
  let difference = cash - total;

  while (difference > 0) {

    if (difference >= 2000) {
      change.twentyDollar = change.twentyDollar + 1 || 1;
      difference -= 2000;

    } else if (difference >= 1000) {
      change.tenDollar = change.tenDollar + 1 || 1;
      difference -= 1000;

    } else if (difference >= 500) {
      change.fiveDollar = change.fiveDollar + 1 || 1;
      difference -= 500;

    } else if (difference >= 200) {
      change.twoDollar = change.twoDollar + 1 || 1;
      difference -= 200;

    } else if (difference >= 100) {
      change.oneDollar = change.oneDollar + 1 || 1;
      difference -= 100;

    } else if (difference >= 25) {
      change.quarter = change.quarter + 1 || 1;
      difference -= 25;

    } else if (difference >= 10) {
      change.dime = change.dime + 1 || 1;
      difference -= 10;

    } else if (difference >= 5) {
      change.nickel = change.nickel + 1 || 1;
      difference -= 5;

    } else {
      change.penny = change.penny + 1 || 1;
      difference -= 1;
    }

  }

  return change;
};

module.exports = calculateChange;

