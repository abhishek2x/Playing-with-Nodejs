
const fs = require("fs");
let text = fs.readFileSync("read.txt", "utf-8");
text = text.replace("Abhishek", "The Programmed Enthusiast");

console.log("The content of the file is");
console.log(text);

console.log("Creating new file...");
fs.writeFileSync("enhusiast.txt" , text);