// Linking custom module

const mod = require("./mod.js");

// Sample lookup

// module.exports = {
//     avg : avg,
//     name : "Abhishek",
//     repo  : "Github"
// }

console.log(mod.avg([3, 4]));
console.log(mod.name);
console.log(mod.repo);
console.log("This is index.js");