function rowSumOddNumbers(n) {
	// TODO
  var total=0;
   for (var i=0;i<n;i++){
       total+=i
    //   console.log(total)
   }
   var firstNum=2*total+1
   
//   console.log(firstNum)
   var sum=0;
   for (j=0;j<n;j++){
       sum+=firstNum
       firstNum+=2
       console.log('in loop ', sum)
   }
   return sum

}

//Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
//Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

//rowSumOddNumbers(1); // 1
//rowSumOddNumbers(2); // 3 + 5 = 8
