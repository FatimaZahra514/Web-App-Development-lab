// 6. Arrow function to count vowels
const countVowelsArrow = str => [...str].filter(char => "aeiouAEIOU".includes(char)).length;

console.log(countVowelsArrow("JavaScript")); 
console.log(countVowelsArrow("Hello World")); 
console.log(countVowelsArrow("AEIOU")); 
console.log(countVowelsArrow("BCDFG")); 
