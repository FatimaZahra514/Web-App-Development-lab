// 9. Take an input n from user and create a new array
let n = parseInt(prompt("Enter the number of elements:")); 
let userArray = []; 

for (let i = 0; i < n; i++) {
    userArray.push(parseInt(prompt(`Enter number ${i + 1}:`))); 
}

console.log("User Array:", userArray);
