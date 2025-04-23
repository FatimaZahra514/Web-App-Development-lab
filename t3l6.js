// 3. Convert each string in an array to uppercase using for of loop
function convertToUpperCase(arr) {
    let upperCaseArr = [];
    for (let str of arr) {
        upperCaseArr.push(str.toUpperCase());
    }
    return upperCaseArr;
}
console.log(convertToUpperCase(["apple", "banana", "cherry"]));

