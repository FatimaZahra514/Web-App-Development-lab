// 2. Find max and min in an array using for of loop
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return { max, min };
}
console.log(findMaxMin([10, 25, 5, 40, 15]));

