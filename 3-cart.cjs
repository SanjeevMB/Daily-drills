const products = [{
    shampoo: {
        price: "$50",
        quantity: 4
    },
    "Hair-oil": {
        price: "$40",
        quantity: 2,
        sealed: true
    },
    comb: {
        price: "$12",
        quantity: 1
    },
    utensils: [
        {
            spoons: { quantity: 2, price: "$8" }
        },
        {
            glasses: { quantity: 1, price: "$70", type: "fragile" }
        },
        {
            cooker: { quantity: 4, price: "$900" }
        }
    ],
    watch: {
        price: "$800",
        quantity: 1,
        type: "fragile"
    }

}];


/*

Q1. Find all the items with price more than $65.
Q2. Find all the items where quantity ordered is more than 1.
Q.3 Get all items which are mentioned as fragile.
Q.4 Find the least and the most expensive item for a single quantity.
Q.5 Group items based on their state of matter at room temperature (Solid, Liquid Gas)

NOTE: Do not change the name of this file

*/

// Question 1.

function itemsPriceMoreThen$65(items) {

    let productsName = Object.keys(items[0]);

    let desiredProduct = productsName.reduce((productsAbove65, product, index, productsName) => {

        if (Array.isArray(items[0][product]) === false) {

            if (Number(items[0][product].price.slice(1)) > 65) {

                productsAbove65[0][product] = { ...items[0][product] };

            }

        } else if (Array.isArray(items[0][product]) === true) {

            let utemsilsName = items[0][product].map((element, index, array) => {

                return Object.keys(items[0][product][index]);

            });

            let utensilsProducts = utemsilsName.reduce((utensilsAbove65, untensil, index, array) => {

                if (Number(items[0][product][index][untensil].price.slice(1)) > 65) {

                    utensilsAbove65[untensil] = { ...items[0][product][index][untensil] };

                }

                return utensilsAbove65;

            }, {});

            productsAbove65[0][product] = [{ ...utensilsProducts }];

        }

        return productsAbove65;

    }, [{}]);

    return desiredProduct;

}

console.log(JSON.stringify(itemsPriceMoreThen$65(products)));

// Question 2.

function quantity(products) {

    let productKeys = Object.keys(products[0]);

    let result = productKeys.map((element, index, array) => {

        if (typeof (products[0][element]) == 'object' && products[0][element].quantity > 1) {

            return element = products[0][element];

        } else {

            return products[0][element].map((elementInner, indexInner) => {

                if (products[0][element][indexInner].quantity > 1) {

                    let element = [];

                    return element.push(products[0][element][indexInner]);

                }

            });

        }

    });

    return result;

}

// console.log(quantity(products));

// Question 3.

// Question 4.

// Question 5.

// console.log(products);