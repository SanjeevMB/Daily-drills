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
        }, {
            glasses: { quantity: 1, price: "$70", type: "fragile" }
        }, {
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

// Question 2.

function quantity(products) {

    let productKeys = Object.keys(products[0]);

    let result = productKeys.map((el, ind, arr) => {

        if (typeof (products[0][el]) === 'object' && products[0][el].quantity > 1) {

            return el = products[ind][el];

        } else {

            products[0][el].map((e, ind) => {

                if (products[0][el][ind].quantity > 1) {

                    let el = [];
                    return el.push(products[0][el][ind]);

                }
            })
        }

        return result;

    });

}

console.log(quantity(products));

// Question 3.

// Question 4.

// Question 5.
