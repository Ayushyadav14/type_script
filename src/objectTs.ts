const chai ={
    name: "Masala chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

//Typescript behind the screen always infer

let tea:{
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

// Duck Typing
//This code demonstrates structural typing in TypeScript. 
// Even though bigCup and coffee have extra properties (material and beans),
//  they can still be assigned to Cup and Brew because 
// they contain all the required properties of those types.
type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabica" };

const chaiBrew: Brew = coffee;



type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "chaicode",
    password: "123"
}

// Short explanation:

// This code creates an Order type using two smaller types:

// Item → stores product details (name, quantity)
// Address → stores address details (street, pin)
// Order → combines id, a list of Items, and an Address

// In simple words:
// You're breaking a large object (Order) into smaller reusable
// types (Item and Address) to make the code cleaner and easier to maintain.
type Item = { name: string, quantity: number }

type Address = { street: string, pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address
}


//

type Chai ={
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai =(updates: Partial<Chai>)=>{
    console.log("updatingch chai with",updates);

}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})

type ChaiOrder ={
    name?:string;
    quantity?:number;
}

const placeOrder =(order: Required<ChaiOrder>) =>{
    console.log(order);

}

placeOrder({
    name: "Masala chai",
    quantity:2
})

// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean;
//     ingredients: string[]
// }

// type BasicChaiInfo = Pick<Chai, "name" | "price">;

// const chaiInfo: BasicChaiInfo = {
//     name: "Lemon Tea",
//     price: 30
// }

// Short Explanation (2-3 lines)

// Pick creates a new type by selecting specific properties from an existing type.
// Here, BasicChaiInfo picks only name and price from Chai, so isHot and ingredients are not required.


type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
};

type PublicChai = Omit<ChaiNew, "secretIngredients">;
// Short Explanation (2-3 lines)

// Omit creates a new type by removing specific properties from an existing type.
// Here, PublicChai contains all properties of ChaiNew except secretIngredients.