function sevenRandomNumbers() {
    var array = [];
while(array.length < 8){
    var r = Math.floor(Math.random() * 10) ;
    if(array.indexOf(r) === -1) array.push(r);
}
return array;
}
 console.log(sevenRandomNumbers())
