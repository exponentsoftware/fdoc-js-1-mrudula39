const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(paragraph,w1,w2) {
  let t_paragraph = paragraph.split(" ");
  let w1_count=0,w2_count=0;
    for(let i of t_paragraph ) {
        if(w1.toLowerCase() == i.toLowerCase()) {
            w1_count++;
        }
        if(w2.toLowerCase() == i.toLowerCase()) {
            w2_count ++;
        }
    }
    if(w1_count >= w2_count)
    {
        return "The word " + w1 + " occured more than " + w2
    }
    else {
        return "The word " + w2 + " occured more than " + w1
    }

}

console.log(countWords(paragraph,'love', 'you'));
