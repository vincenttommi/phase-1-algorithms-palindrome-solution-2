function isPalindrome(word){


//iterating from  the beginin  of the string

for(let startIndex = 0; startIndex < word.length / 2; startIndex++){

  //compare the letter we are iterating over to the corresponding letter 
  // atthe  end of the string

  const endIndex = word.length -1 -startIndex;
  if(word[startIndex]!== word[endIndex]){


  //if letters don't match,  return false
 return false;
  }
}

//if we reach middle, and the all the letters match returm true
return true;

}












/* 



iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));



  console.log("");



  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));


  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("a"));
  
  

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
