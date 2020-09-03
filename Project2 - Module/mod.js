// Making custom module

function avg(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg : avg,
    name : "Abhishek",
    repo  : "Github"
}