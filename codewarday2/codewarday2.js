function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.reduce(function(a, b) {
   if (typeof b === 'number') a.push(b);
   return a;
 }, []);
  }
