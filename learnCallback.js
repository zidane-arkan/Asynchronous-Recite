const fruit = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Sprinkles"]
};

console.log("Order placed. Please call production");

let order = (fruitType ,holderType, ToppingsType, call_production) => { 
    call_production();
};

let production = () => { 
    console.log("Ice Cream In Making");
};

order(production);

const step1 = () => {
    console.log();
};
const step2 = () => {
    console.log();
};
const step3 = () => {
    console.log();
};
const step4 = () => {
    console.log();
};
const step5 = () => {
    console.log();
};
const step6 = () => {
    console.log();
};
const step7 = () => {
    console.log();
};