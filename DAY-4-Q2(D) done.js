// Question - 2(D) Return all the prime numbers in an array

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let prime = (array) => {
    
    for (let i=0; i<numbers.length; i++) {
        let factors = 0;

        for (let divisor = 2; divisor<numbers[i]; divisor++) {
            if (numbers[i] % divisor == 0) {
               factors++
            }
        }
        if (factors == 0 && numbers[i] != 1) {
            console.log("prime");
        }else {
            console.log("Not prime")
        }
    }

}
prime(numbers);




