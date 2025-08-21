
/* In this question, we would like you to demonstrate
    your understanding of array methods 
    in JavaScript by implementing the following four methods from scratch: myMap, myFilter, myReduce, 
    and myForEach.*/


// Mymap method

const numbers = [1, 2, 3, 4, 5];


const myMap = (array, callback) => {
    const result = [];
    for (let i= 0; i< array.length;i++){
        result.push(callback(array[i],i,array));
    }
    return result;
}
const multiply = myMap(numbers, nums => nums * 5);
console.log(multiply);

//Myfilter method
const myFilter = (array, callback) => {
    const result = [];
    for(let i =0; i < array.lenght; i++) {
        if(callback(array[i],i,array)){
            result.push(array[i])
        }
    }
    return result; 
}
