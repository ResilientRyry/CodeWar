returnArr = [];
  // Senior >= 55 YO, and HC > 7
  // outer loop, all array elements
  for (var i=0;i<arr.length;i++) {
    if (arr[i][0] >= 55 && arr[i][1] > 7) {
      returnArr.push('Senior');
    }else {
      returnArr.push('Open');
    }
  }
  return returnArr;
  
  // The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
  // They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.

