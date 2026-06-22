function greet(name : string) : string{ // by doing this we can even retuen that the data which we get after returning this function i s also the string
    return `Hello ${name}`;
}

console.log(greet("hitesh"));
console.log(greet(42));