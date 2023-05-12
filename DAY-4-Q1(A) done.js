// Question-1(A): Print odd numbers in an array | done

// METHOD 1:

let numbers = [1,2,3,4,5];

((array)=>{
    for (let value of array) {
        if (value % 2 != 0) {
          console.log(value)
        }
    }
})(numbers);
// -------------------------------------------------------------

// METHOD 2:

// let input = [1,2,3,4,5];
// (numbers =>{
//     let odd = [];
//     for (let i=0; i<input.length; i++) {
//         if (input[i] % 2 != 0) {
//             console.log(input[i]);
//         }
//     }
// })(input);

