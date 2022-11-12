function sum(num1,num2){
   return num1+num2;
}

const sum_an = (num1,num2) => {
    return num2+num1;
}
console.log(sum(5,6));
console.log(sum_an(5,6));



const myArray = []
myArray[0] = 12;
myArray[2] = 13;
console.log(myArray);
myArray.push(32);
myArray.unshift(43);
console.log(myArray);
let hero =  myArray.shift();
console.log(hero);
console.log(myArray);
myArray.splice(1,2,42);
console.log(myArray);


console.log(myArray.join().split(","));