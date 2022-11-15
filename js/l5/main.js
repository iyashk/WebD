console.log("heor");

class Pizza {
    constructor(){
        this.size = "medium";
        this.crust = "original";
    }
    bake(){
        console.log(`hero ${this.size} and crust: ${this.crust}`);
    }

}

class OfferPizza extends Pizza{
    constructor(){
        super();
        this.offer_price = 120;
        
    }
    sale(){
        console.log(`a ${this.size} pizza is available at ${this.offer_price}`);
    }
}

const newPizza = new Pizza();
console.log(newPizza) ;
newPizza.bake()

const newoffer = new OfferPizza();
newoffer.sale();