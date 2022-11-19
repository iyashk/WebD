const guitar = ()=>{
    return "hello";
}

const piano = ()=>{
    return "piano";
}
export {guitar};


export class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
    greeting(){
        return "Congratulations";
    }
}

