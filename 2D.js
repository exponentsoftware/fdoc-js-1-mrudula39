function checkUniqueness(array)
{
    
    let s = new Set();
    for (let i = 0; i < array.length; i++) {
        s.add(array[i]);
    }
 
    
    return (s.size == array.length);
    
}
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
