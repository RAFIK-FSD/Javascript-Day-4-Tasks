// Question-1(H) - Rotate array by K time

(function(arr, k) {
// find the number of rotation
let rotations = k % arr.length;
// extract the element that need to be moved to front of the array
let extract = arr.slice(-rotations) // [3,4,5]
// create a new array for comcat the extracted element with the remaining element
let rotatedArray = extract.concat(arr.slice(0, arr.length-rotations))

console.log(rotatedArray)
})([1,2,3,4,5], 5); 
















