// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

// Note:
// You will always receive a positive integer.

var countSheep = function (num){
  //your code here
  let sum = '';
  for( let i = 1; i<num + 1; i++ ){
    sum += [i] + ' sheep...'
  }
  return sum;
}
