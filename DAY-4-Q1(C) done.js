// Question-1(c): Sum of all numbers in an array | DONE

((array)=>{
    let sum = array.reduce((p,c) => p+c);
    console.log(sum);
    

})([1,2,3,4,5]);
// -----------------------------------------------------------

// METHOD 2:
// let input = [1,2,3,4,5];
// ((number)=>{
//     let sum = 0;
//     for (let i=0; i<input.length; i++) {
//         sum = sum + number[i];
//     }
//     console.log(sum);
    

// })(input);