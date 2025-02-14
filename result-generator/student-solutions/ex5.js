/*
In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

Percent Encoding
Take a look at the following URL, specifically the last part:

https://www.google.com/search?q=cornerstone%20college

This URL will perform a google search for the term "cornerstone college". Notice that when the string "cornerstone college" is part of a URL, the space is replaced with %20.

If we want to add a parameter to a url, there are certain characters that must be encoded in order to make the URL valid. There are many characters that must be encoded, including: , !, ", and #. For this exercise, we will only be focusing on replacing the space with %20.


Instruction
Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

Warning
Use some sort of looping. Do Not use String.prototype.replace
*/

const urlEncode = function(text) {
text = text.trim();
let encodedText = "";
let index = 0;
for (let i = 0; i < text.length; i++){
  if(text[i] === ' '){
    encodedText += text.slice(index, i)+'%20';
    index = i+1;
  }
}
return encodedText + text.slice(index, text.length);
  };
  
  module.exports = urlEncode;