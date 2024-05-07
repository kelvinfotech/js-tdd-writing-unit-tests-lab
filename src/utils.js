// src/utils.js

function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (word.length === 0) {
      return false; // An empty string is not a palindrome
    }
  
    // Remove non-alphabetic characters and convert to lowercase
    const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
  
    // Check if the cleaned word is equal to its reverse
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  module.exports = { isPalindrome };
  