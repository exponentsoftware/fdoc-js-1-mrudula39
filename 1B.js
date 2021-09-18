const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
   let s1=" ";
    for(let i of sentence) {
        
        if((i.charCodeAt() >=65 && i.charCodeAt() <=90) ||  (i.charCodeAt() >=97 && i.charCodeAt() <=122) || i.charCodeAt() == 32 || i.charCodeAt() == 46 ) {
           s1=s1 + i;
           console.log
        }
    }
    return s1;

}
console.log(cleanText(sentence));
