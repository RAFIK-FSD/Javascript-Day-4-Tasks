// Question-1(G) - Remove duplicates from an array | done

((number)=>{
    let numbers = number.map((value)=>value)
    var filtered = [];
for (let i=0; i<numbers.length; i++) {
    if (filtered.indexOf(numbers[i]) === -1) {
        filtered.push(numbers[i]);
    } 
}
console.log(filtered);
})([1,2,3,4,5,3,2,6,7,1]);


