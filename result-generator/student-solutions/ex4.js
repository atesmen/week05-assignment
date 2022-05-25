/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function(instructors) {
  var strArr = instructors[0];
  for(var i = 0; i < instructors.length; i++){
    if (strArr <= instructors[i]){
      strArr = instructors[i];
    }
  }
  return strArr.name;
  };
  
  module.exports = instructorWithLongestName;