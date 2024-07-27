import { default as myDefaultMergeArr } from "./modules/defaultExport.js";

let arr1 = [2, 4];
let arr2 = [9, 7, 8];
let arr3 = [34, 21, 71];
console.log(`Merging arrays : [${arr1}], [${arr2}] and [${arr3}]`);
console.log(`${myDefaultMergeArr(arr1, arr2, arr3)}`);
