

/* Odd Squares
You are given an array of numbers. Your task is to implement a function 
called oddSquares that filters out the even numbers from the array and then 
maps the remaining numbers to their squares.
 */

const oddSquares = arr => arr
  .filter(num => num % 2 !== 0)
  .map(num => num ** 2);
  console.log(oddSquares([1, 2, 3, 4, 5]));