// Question -1(B): Convert all the strings to title caps in a string array

((string) => {
  let strings = string.map((value)=>value)
  for (let i=0; i<strings.length; i++) {
    strings[i] = strings[i][0].toUpperCase() + string[i].slice(1)
  }
  console.log(strings)

})(['apple', 'banana', 'orange', 'papaya']);

// -----------------------------------------------------------------------------------------------------


