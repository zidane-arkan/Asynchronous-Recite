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
        console.log(`You order Ice Cream With ${findFruit} Flavor`);
        setTimeout(() => {
            console.log('Cut The Fruit');
            setTimeout(() => {
                console.log('Add Water and Ice');
                setTimeout(() => {
                    console.log('Start The Machine');
                    setTimeout(() => {
                        console.log(`Use ${stocks.Holder[0]}`);
                        setTimeout(() => {
                            console.log(`Use ${stocks.Toppings[1]}`);
                            setTimeout(() => {
                                console.log(`Serve Ice Cream`);
                                call_production();
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production Ended");
    }, 0000);
};

order("grapes", production);