// Question - 2(E) Return all the palindroms in an array

let strings = ['rafik', 'mohamed', 'dad', 'mom'];

let palindrome = (string) => {
    for (let i=0; i<strings.length; i++) {
        let reverse = string[i].split('').reverse().join("");
        if (strings[i] == reverse) {
        console.log(reverse)
        }
}
}

palindrome(strings)
// -----------------------------------------------------------------
