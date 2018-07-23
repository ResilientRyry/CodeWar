function sortArray(array) {
  let odds = array.filter( elem => {
    return elem % 2;
  })
  odds.sort((a, b) => a - b);
  let counter = 0
  let result = array.map( elem => {
    if(elem % 2) {
     counter++;
     return odds[counter - 1];
    } else {
      return elem;
    }
  })
  
  return result
}

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
