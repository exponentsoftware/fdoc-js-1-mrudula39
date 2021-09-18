function countWords(sentence){
    let words = sentence.split(" ");
    let c =0;
    for(let word of words){
        // console.log(word)
        if(word.length > 1){
            c++
        }
    }
    return c;
}

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));
