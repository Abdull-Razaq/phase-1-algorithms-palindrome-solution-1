function reverseString(word) {
  // TODO: implement string reversing functionality
  return word;
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false

  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

}

/* 
  Add your pseudocode here
  
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false


*/

/*
  Add written explanation of your solution here
   A function that takes an input and return true if the string is palindrome nature else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
