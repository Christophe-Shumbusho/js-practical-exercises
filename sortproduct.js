/*  Sort products
You are given an array of product objects, 
each containing a name (string) and a price (number). 
Your task is to implement a function called sortProducts 
that sorts the products based on their prices in ascending order.
*/


const products = [
    {name: "Product 1", price:1300},
    {name: "Product 2", price:800},
    {name: "Product 3", price:1500},
    {name: "Product 4", price:600},
];
const sortProducts = products => { 
    return products.sort((a,b) => a.price - b.price)};


const sortedProducts = sortProducts(products);
console.log(sortedProducts);