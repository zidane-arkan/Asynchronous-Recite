const stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Sprinkles"]
};

// console.log("Order placed. Please call production");

let order = (fruitName, call_production) => {
    //Place Order
    let findFruit = stocks.Fruits.find((fruit) => {
        return fruit == fruitName;
    });
    setTimeout(() => {
        console.log(`You order ${findFruit}`);
        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production Started");
    }, 0000);
};

order("grapes", production);