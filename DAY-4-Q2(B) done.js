// Question - 2(B) - Convert all the strings to title caps in a string array

let strings = ['apple', 'orange', 'banana'];
let caps = (string) => {
    for (let i=0; i<strings.length; i++) {
      strings[i] = strings[i][0].toUpperCase() + strings[i].slice(1) // A + pple
      console.log(strings[i])
    }
    
}
caps(strings)




