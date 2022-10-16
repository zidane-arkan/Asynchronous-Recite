const stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Sprinkles"]
};
let isShopOpen = true;

let order = (time, work) => {
    //Place Order
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject("Shop is Closed");
        }
    });
};

order(3000, () => `Order Ice Cream with ${stocks.Fruits[2]}`)
    .then((result) => {
        console.log(result);
    })
    .then(() => {
        order(2000, () => console.log(`Order Ice Cream with ${stocks.Fruits[2]}`));
    })
    .then(() => {
        order(1000, () => console.log(`Cut The fruit`));
    })
    .then(() => {
        order(1000, () => console.log(`Add water and ice`));
    })
    .then(() => {
        order(3000, () => console.log(`Start the Machine`));
    })
    .then(() => {
        order(5000, () => console.log(`Serve Ice Cream`));
    })
    .catch((err) => {
        console.log(err);
    })