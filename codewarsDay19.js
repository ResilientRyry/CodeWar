function sevenAte9(str){
var arr=str.split("");
for(var i=0;i<arr.length;i++){
if(+arr[i] === 9 && i > 0){
  if(+arr[i-1]===7 && +arr[i+1]===7){
  arr.splice(i, 1);
  }
  } 
}
return arr.join("");
}

// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'
// Input: String Output: String
