

const myObj = {name : "hero"};
const myOBj2 = {bot : true};

const myObj3 = {
    name : "Harhsith",
    roll : 139,
    marks : [1,2,3],
    sum:function(marks){
        let ans = 0;
        for(i=0;i<marks.length;i++){
            ans = ans+ marks[i];
        }
        console.log(ans);
    }
}

myObj3.sum(myObj3.marks);
console.log(myObj3.keys());
