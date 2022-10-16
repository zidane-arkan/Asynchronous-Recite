const stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Sprinkles"]
};

let order = (fruitName, call_production) => {
    //Place Order
    let findFruit = stocks.Fruits.find((fruit) => {
        return fruit == fruitName;
    });
};

let production = () => {
    setTimeout(() => {
        console.log("Production Ended");
    }, 0000);
};

order("grapes", production);