function reverseArray(arr) {
    let revArr = [];
    while (arr.length) {
      revArr.push(arr.pop());
    }
  
    return revArr;
  }
  
  console.log(reverseArray(['A','B','C']));
