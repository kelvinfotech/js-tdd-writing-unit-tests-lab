// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  it('should return true for palindromes', () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
    // Add more palindrome test cases if needed
  });

  it('should return false for non-palindromes', () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    // Add more non-palindrome test cases if needed
  });

  it('should handle mixed case palindromes', () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("LeVel")).toBe(true);
    // Add more mixed case palindrome test cases if needed
  });

  it('should return false for an empty string', () => {
    expect(isPalindrome("")).toBe(false);
  });

  it('should throw an error if input has any non-alphabetic characters', () => {
    // Write test cases for this scenario
  });

  it('should throw an error if input is not a string', () => {
    // Write test cases for this scenario
  });
});
