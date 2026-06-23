// class Chai {

//     flavour: string;
//     price: number;

//     // constructor(flavour: string, price: number) {

//     //     this.flavour = flavour;
//     //     this.price = price;

//     // }
//     constructor(flavour: string){

//         this.flavour = flavour;
//         console.log(this);

//     }

// }

// const masalaChai = new Chai("Ginger",20);

// masalaChai.flavour = "masala";


class Chai {

    public flavor: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients //ok
    }


}

// const c = new Chai()
// Short Explanation (2-3 lines)
// public members can be accessed from anywhere.
// private members can only be accessed inside the class.
// protected members can be accessed inside the class and its child classes (subclasses).

class Shop {

    protected shopName = "Chai corner"

}

class Branch extends Shop {

    getName() {
        return this.shopName //OK
    }

}

//new Branch().
class Walet{
    #balance =100
    getBalance(){
        return this.#balance
    }
}

const w = new Walet();

class Cup{
    readonly capacity: number

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai {

    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too Sweet");

        this._sugar = value
    }

}
const c = new ModernChai()
c.sugar =3

// Short Explanation (2-3 lines)

// This class uses getter (get) and setter (set) methods to control access to the private _sugar property.
// The setter validates the value and throws an error if sugar is greater than 5.


class EkChai {

    static shopName = "Chaicode caffe"

    constructor(public flavour: string) {}

}

console.log(EkChai.shopName);

abstract class Drink {

    abstract make(): void

}

class MyChai extends Drink {

    make() {
        console.log("Brewing chai");
    }

}
// Short Explanation (2-3 lines)
// static properties belong to the class itself, so they are accessed using EkChai.shopName.
// abstract classes cannot be instantiated directly and can contain abstract methods.
// MyChai extends Drink and must implement the make() method.

class Heater {

    heat() {}

}

class ChaiMaker {

    constructor(private heater: Heater) {}

    make() {
        this.heater.heat
    }

}
// Short Explanation (2-3 lines)

// This demonstrates dependency injection.
// ChaiMaker receives a Heater object through its constructor and uses it to heat the chai.
// This makes the code more modular and easier to test.