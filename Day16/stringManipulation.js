// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log th result for a few test cases.

function reverseMe(str) {
  if (str.length == 0) return "";
  if (str.length == 1) return str[0];

  return str[str.length - 1].concat(reverseMe(str.slice(0, str.length - 1)));
}

console.log("*** Activity 3: String Manipulation with Recursion ***;");

console.log("Reversed string of 'Army': ", reverseMe("Army"));
console.log("Reversed string of '': ", reverseMe(""));
console.log("Reversed string of 'A': ", reverseMe("A"));
console.log("Reversed string of 'Chai aur Code': ", reverseMe("Chai aur Code"));
console.log(
  "Reversed string of 'Haan Ji Kaise Hain aap sab!': ",
  reverseMe("Haan Ji Kaise Hain aap sab!")
);

// Task 6: Write a recursive function to check if a string is palindrome.  Log th result for a few test cases.

function isPalindrome(str) {
  if (str.length == 0 || str.lengh == 1) return true;

  if (str[0] == str[str.length - 1]) {
    isPalindrome(str.slice(1, str.length - 1));
    return true;
  } else {
    return false;
  }
}

console.log("Is 'malayalam' a palidrome : ", isPalindrome("civic"));
console.log("Is 'madam' a palidrome : ", isPalindrome("madam"));
console.log("Is 'racecar' a palidrome : ", isPalindrome("racecar"));
console.log("Is 'chai or code' a palidrome : ", isPalindrome("chai or code"));
console.log("Is 'stateman' a palidrome : ", isPalindrome("stateman"));
console.log("Is 'stats' a palidrome : ", isPalindrome("stats"));
