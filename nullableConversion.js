
/*Nullable conversion
you are given an object with properties that may contain 
null or undefined values. Your task is to implement a function 
called convertNullableValues that checks if any of the properties 
in the object contains null or undefined. If a property is null convert 
it to zero and if a property is undefined convert it to an empty string. 
Return the modified object
 */



const input = {
    a: null,
    b: undefined,
    c: 42,
    d: "Hello",
}

const convertValues = obj => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value === null) {
      result[key] = 0;
    } else if (value === undefined) {
      result[key] = "";
    } else {
      result[key] = value;
    }
  }
  return result;
};
const output = convertValues(input);
console.log(output);