// Question - 2(C) - Sum of all numbers in an array

let numbers = [1,2,3,4,5,10];
let sum = (numbers) => {
    return numbers.reduce((p,c)=> p+c)
}

console.log(sum(numbers));