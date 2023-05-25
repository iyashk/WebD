import * as Guitars from "./guitar.js";
import {User} from './user.js';
console.log(Guitars.guitar());


const user = new User("yash","kiran@gmail.com");
console.log(user);
console.log(user.name);
console.log("intro");
window.alert(location);
const myarray = [1,2,3,4]
sessionStorage.setItem("newitem",myarray);