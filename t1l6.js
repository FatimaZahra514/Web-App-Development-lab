// 1. Find even numbers using for of loop in an array
function findEvenNumbers(arr) {
    let evenNumbers = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

