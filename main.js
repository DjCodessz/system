let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]
//this is for ascending number only
