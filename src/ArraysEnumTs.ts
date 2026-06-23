const chaiFlavours: string[] =["Masala","Adrak"]
const chaiPrice:number[] =[10,20]

const rating: Array<number> = [4.5,5.0]

type Chai ={
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala",price:15},
    {name: "Adrak",price:25}
]

const cities: readonly string[] =["Delhi","Jaipur"]
//cities.push("Pune")

const table: number[][] =[
    [1,2,3],
    [4,5,6]
]

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];

// chaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?];

userInfo = ["hitesh", 100];

userInfo = ["hitesh", 100, true];
// Short Explanation (2-3 lines)

// A tuple defines a fixed number of elements with specific types and order.
// chaiTuple must have a string followed by a number.
// In userInfo, the third boolean value is optional because of ?.

const location: readonly [number,number] = [28.66,32.2]
const chaiItems: [name: string, price: number] = ["Masala Chai", 20];

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVING,//101
    CANCELLED//102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
//makeChai("masala")

enum RandomEnum{
    ID =1,
    NAME ="chai"
}

const enum Sugars{
    LOW =1,
    MEDIUM=2,
    HIGH=3
}

let t: [string,number] = ["chai",10]
t.push("extra")