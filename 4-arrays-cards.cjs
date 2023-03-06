let cards = [
    { "id": 1, "card_number": "5602221055053843723", "card_type": "china-unionpay", "issue_date": "5/25/2021", "salt": "x6ZHoS0t9vIU", "phone": "339-555-5239" },
    { "id": 2, "card_number": "3547469136425635", "card_type": "jcb", "issue_date": "12/18/2021", "salt": "FVOUIk", "phone": "847-313-1289" },
    { "id": 3, "card_number": "5610480363247475108", "card_type": "china-unionpay", "issue_date": "5/7/2021", "salt": "jBQThr", "phone": "348-326-7873" },
    { "id": 4, "card_number": "374283660946674", "card_type": "americanexpress", "issue_date": "1/13/2021", "salt": "n25JXsxzYr", "phone": "599-331-8099" },
    { "id": 5, "card_number": "67090853951061268", "card_type": "laser", "issue_date": "3/18/2021", "salt": "Yy5rjSJw", "phone": "850-191-9906" },
    { "id": 6, "card_number": "560221984712769463", "card_type": "china-unionpay", "issue_date": "6/29/2021", "salt": "VyyrJbUhV60", "phone": "683-417-5044" },
    { "id": 7, "card_number": "3589433562357794", "card_type": "jcb", "issue_date": "11/16/2021", "salt": "9M3zon", "phone": "634-798-7829" },
    { "id": 8, "card_number": "5602255897698404", "card_type": "china-unionpay", "issue_date": "1/1/2021", "salt": "YIMQMW", "phone": "228-796-2347" },
    { "id": 9, "card_number": "3534352248361143", "card_type": "jcb", "issue_date": "4/28/2021", "salt": "zj8NhPuUe4I", "phone": "228-796-2347" },
    { "id": 10, "card_number": "4026933464803521", "card_type": "visa-electron", "issue_date": "10/1/2021", "salt": "cAsGiHMFTPU", "phone": "372-887-5974" }
];

/* 

    1. Find all card numbers whose sum of all the even position digits is odd.
    2. Find all cards that were issued before June.
    3. Assign a new field to each card for CVV where the CVV is a random 3 digit number.
    4. Add a new field to each card to indicate if the card is valid or not.
    5. Invalidate all cards issued before March.
    6. Sort the data into ascending order of issue date.
    7. Group the data in such a way that we can identify which cards were assigned in which months.

    Use method chaining to solve #3, #4, #5, #6 and #7.

    NOTE: Do not change the name of this file 
*/

// Question 1.

function cardsSum(cards) {
    return cards.map((element) => {
        return (element.card_number)
            .split('')
            .map((element, index) => {
                return +element;
            })
            .map((element, index) => {
                let sum = 0;
                if (index % 2 === 0) {
                    sum += element;
                }
                return sum;
            })
    });

}
// console.log(cardsSum(cards));

// Question 2.

function cardIssuedBeforeJune(cards) {

    return cards.filter((element) => {

        return element.issue_date
            .split('/')[0] < 6;

    });
}

// console.log(cardIssuedBeforeJune(cards));

// Question 3.

function randomCvv(cards) {

    let cvvCards = [...cards];

    cvvCards.map((element) => {
        return element.CVV = Number((Math.random() * 1000).toFixed(0));
    })

    return cvvCards;
}

// console.log(randomCvv(cards));

// Question 4.

function cardValidity(cards) {

    let cardsValid = [...cards];

    cardsValid.map((element) => {

        element.validty = true;

    })

    return cardsValid;

}

// console.log(cardValidity(cards));

// Question 5.

function cardsBeforeMarch(cards) {

    let marchCards = [...cards];

    marchCards.map((element) => {

        if (element.issue_date.split('/')[0] < 6) {
            element.validty = false;
        }

    });

    return marchCards;
}

console.log(cardsBeforeMarch(cards));

// Question 6.
// Question 7.