const items = [
    {
        name: 'Orange',
        available: true,
        contains: "Vitamin C",
    }, {
        name: 'Mango',
        available: true,
        contains: "Vitamin K, Vitamin C",
    }, {
        name: 'Pineapple',
        available: true,
        contains: "Vitamin A",
    }, {
        name: 'Raspberry',
        available: false,
        contains: "Vitamin B, Vitamin A",

    }, {
        name: 'Grapes',
        contains: "Vitamin D",
        available: false,
    }
];


/*

    1. Get all items that are available 
    2. Get all items containing only Vitamin C.
    3. Get all items containing Vitamin A.
    4. Group items based on the Vitamins that they contain in the following format:
        {
            "Vitamin C": ["Orange", "Mango"],
            "Vitamin K": ["Mango"],
        }
        
        and so on for all items and all Vitamins.
    5. Sort items based on number of Vitamins they contain.

    NOTE: Do not change the name of this file

*/

// Question 1.

function getItems(items) {

    return items.map((element) => {

        return Object.values(element);

    });
}

// console.log(getItems(items));

// Question 2.

function vitaminCItems(items) {

    let cloneItems = [...items];

    let regEx = /Vitamin C/g;

    return cloneItems.filter((element) => {

        return regEx.test(element.contains);

    });

}

// console.log(vitaminCItems(items));

// Question 3.

function vitaminAItems(items) {

    let cloneItems = [...items];

    let regEx = /Vitamin A/g;

    return cloneItems.filter((element) => {

        return regEx.test(element.contains);

    });

}

// console.log(vitaminAItems(items));

// Question 4.

// function itemGroupByVitamine(item) {

//     let vitamineGroupFruit = {};

//     let cloneItems = [...item];

//     cloneItems.map((element) => {

//         element.contains = element.contains.split(',');

//     })

//     cloneItems.map((elementOuter) => {

//         if (vitamineGroupFruit[elementOuter.contains

//             .map((elementInner) => {

//                 return elementInner;

//             })]) {

//                 vitamineGroupFruit.

//         }
//     })

    // return cloneItems;

// }

console.log(itemGroupByVitamine(items));

// Queston 5.

function vitamineSortByNumbers(items) {

    let cloneItems = [...items];

    cloneItems.map((element) => {

        element.contains = element.contains.split(',')
            .length;

    });

    return cloneItems.sort((a, b) => {

        if (a.contains > b.contains) {

            return 1;

        } else if (a.contains < b.contains) {

            return -1;

        } else {

            return 0;

        }

    });

}

// console.log(vitamineSortByNumbers(items));
