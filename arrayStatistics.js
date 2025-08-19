

/* You are given an array of numbers. 
Your task is to implement a function called arrayStats that returns an object
containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.
*/
const arrayStat = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return { sum: 0, average: 0, min: null, max: null };
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = parseFloat((sum / arr.length).toFixed(2));
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { sum, average, min, max };
}

console.log(arrayStat([1, 2, 3, 4, 5]));