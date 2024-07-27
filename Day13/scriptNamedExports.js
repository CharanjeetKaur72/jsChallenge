import { getDivision, getProduct, isEven } from "./modules/namedExport.js";

console.log("Handling Named exports:");

console.log(`Prduct of 23 and 25 is ${getProduct(23, 25)}.`);
console.log(`Division of 20 by 5 is ${getDivision(20, 5)}.`);
console.log(`Is 23 an Even number ? : result = ${isEven(23)}.`);
