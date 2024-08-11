// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function charOccurrences(str) {
  if (str.length === 0) {
    console.log("Empty String!");
    return;
  }

  let charList = [];
  let charCount = [];

  for (let i = 0; i < str.length; i++) {
    let charIndex = charList.indexOf(str[i]);

    if (charIndex == -1) {
      charList.push(str[i]);
      charCount.push(1);
    } else {
      charCount[charIndex] += 1;
    }
  }

  // display occurrences of character in the string
  console.log(`Character occurrences in the string: "${str}" : `);
  for (let i = 0; i < charList.length; i++) {
    console.log(`'${charList[i]}': ${charCount[i]} `);
  }
}

console.log("*** Activity 3: String Algorithms ***");
charOccurrences("The 30 Days Javascript challenge");

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubString(str) {
  let max = 0;
  let subStr = "";
  let char;
  let pos;

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    pos = subStr.indexOf(char);

    // e.g. ->if subStr is "hj" and h is going to repeat, the new subStr will start from "j" then
    if (pos !== -1) {
      subStr = subStr.substring(pos + 1);
    }

    subStr += char; // e.g. -> subStr will now be "jh"
    max = Math.max(max, subStr.length);
  }

  console.log("The substring is :", subStr);
  return max;
}

console.log(longestSubString("dvddksssowf"));

let str = "Hello, I want to learn Javascript";
console.log(
  `Length of the longest substring without repeating characters in string: "${str}" `
);
console.log(longestSubString(str));
