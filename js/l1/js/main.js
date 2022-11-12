console.log("Hello World!");
console.log(typeof "Hero");

const myVar = "Maths";
console.log(myVar.length);
console.log(myVar);

const number = 67;
const string = "67";
console.log(number==string);
console.log(Number.parseFloat("1234.4556789gh").toFixed(2));


console.log(Math.trunc(Math.E),Math.PI);

let maths = 59;
if (maths>60){
    console.log("NOt a rahul");
}
else if (maths===59){
    console.log("is Rahul");
}
else{
    console.log("some other");
}


// user input

let is_true = confirm("accept for permissoin");
if (is_true){
    console.log("accepted");
    let name = prompt("Enter your name in the field");
    let name_bool = name ?? "default name loaded";
    if (name_bool === name){
        console.log(name.length>0?name:"name not entered")
        
    }
    else{
        console.log("name not entered")
    }
    // let name_bool = name.length>0?console.log(name ?? "default name loaded");
    console.log();
}
else{
    console.log("cancelled");
}