const stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Sprinkles"]
};

let isShopOpen = true;

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Our Shop Is Closed"));
        }
    });
};

let chooseToppings = (topping) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`${stocks.Toppings[topping]}`));
        }, 3000);
    });
};

let kitchen = async () => {
    try {
        await time(3000);
        console.log(`You Order ${stocks.Fruits[3]}`);
        await time(2000);
        console.log(`Cut The Fruit`);
        await time(1000);
        console.log(`Add Water and Ice`);
        await time(1000);
        console.log(`Start Machine`);
        await time(1000);
        console.log(`What Topping You Want ?`);
        await chooseToppings(0);
        await time(2000);
        console.log('Serves Ice Cream !');
    }
    catch (error) {
        console.log(error.message);
    }
};

kitchen();