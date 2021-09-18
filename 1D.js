function countWords(sentence){
    let wordset = sentence.split(" ")
    for(let word1 of wordset){
      let last = word1[word1.length-1]
      if(last == "."){
        let newword = word1.split(".")
        wordset[wordset.indexOf(word1)]= newword[0]
      }
      if(last == "?"){
        let newword = word1.split("?")
        wordset[wordset.indexOf(word1)]= newword[0]
      }
    }
    let count =0;
    let array1=[];
    for(let word1 of wordset){
      let ct =0;
      for(let word2 of wordset){
        if(word1.toLowerCase() == word2.toLowerCase()){
          ct++
        }
      }
      if(count == 1){
        count++
      }else{
        if(array1.includes(word1)==false){
          array1.push(word1)
        }
      }
    }
    count = count+array1.length
    return count
  }
  
  const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
  console.log(countWords(sentence));
