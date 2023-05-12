// Question-1(E) - Return all the palindromes in an array | DONE


((str) => {
    for (let i=0; i<str.length; i++) {
        let reverse = str[i].split('').reverse().join("");
        if (str[i] == reverse) {
        console.log(reverse);
        }
    }

})(['rafik', 'mohamed', 'mom', 'dad']);