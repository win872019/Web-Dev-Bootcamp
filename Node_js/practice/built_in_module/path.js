const path=require('path');

// console.log(path);
// console.log(`__filename = ${__filename}`);
// console.log(`__dirname = ${__dirname}`);



/* path.join */
let newPath1=path.join(__filename,"abc");
console.log(newPath1);

let newPath2=path.join(__dirname,"abc.txt");
console.log(newPath2);



/* path.extname */
let type1=path.extname(__filename);
console.log(`type = ${type1}`);


let type2=path.extname("hi.txt");
console.log(`type2 = ${type2}`);


/* path.basename */
let bName1=path.basename(__filename);
console.log(`bName1 = ${bName1}`);


