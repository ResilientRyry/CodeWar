//Invisible Cubes Questions
//
// Imagine there's a big cube consisting of n^3 small cubes. Calculate, how many small cubes are not visible from outside.
//
// For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)





function notVisibleCubes(n) {
    // your code!
    if (n < 3){
      return 0;
    } else {
      return Math.pow(n-2, 3);
    }
  }
