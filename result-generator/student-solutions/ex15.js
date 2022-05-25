/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function(instructors) {
  let result = {};
  instructors.forEach(function(elem){
    if(!result[elem.course]){
      result[elem.course] = [];
      result[elem.course].push(elem.name);
    } else {
      result[elem.course].push(elem.name);
    }
  });
  return result;
};

module.exports = organizeInstructors;