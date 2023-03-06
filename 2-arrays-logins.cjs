let input = [
    {
        "id": 1,
        "first_name": "Valera",
        "last_name": "Pinsent",
        "email": "vpinsent0@google.co.jp",
        "gender": "Male",
        "ip_address": "253.171.63.171"
    },
    {
        "id": 2,
        "first_name": "Kenneth",
        "last_name": "Hinemoor",
        "email": "khinemoor1@yellowbook.com",
        "gender": "Polygender",
        "ip_address": "50.231.58.150"
    },
    {
        "id": 3,
        "first_name": "Roman",
        "last_name": "Sedcole",
        "email": "rsedcole2@addtoany.com",
        "gender": "Genderqueer",
        "ip_address": "236.52.184.83"
    },
    {
        "id": 4,
        "first_name": "Lind",
        "last_name": "Ladyman",
        "email": "lladyman3@wordpress.org",
        "gender": "Male",
        "ip_address": "118.12.213.144"
    },
    {
        "id": 5,
        "first_name": "Jocelyne",
        "last_name": "Casse",
        "email": "jcasse4@ehow.com",
        "gender": "Agender",
        "ip_address": "176.202.254.113"
    },
    {
        "id": 6,
        "first_name": "Stafford",
        "last_name": "Dandy",
        "email": "sdandy5@exblog.jp",
        "gender": "Female",
        "ip_address": "111.139.161.143"
    },
    {
        "id": 7,
        "first_name": "Jeramey",
        "last_name": "Sweetsur",
        "email": "jsweetsur6@youtube.com",
        "gender": "Genderqueer",
        "ip_address": "196.247.246.106"
    },
    {
        "id": 8,
        "first_name": "Anna-diane",
        "last_name": "Wingar",
        "email": "awingar7@auda.org.au",
        "gender": "Agender",
        "ip_address": "148.229.65.98"
    },
    {
        "id": 9,
        "first_name": "Cherianne",
        "last_name": "Rantoul",
        "email": "crantoul8@craigslist.org",
        "gender": "Genderfluid",
        "ip_address": "141.40.134.234"
    },
    {
        "id": 10,
        "first_name": "Nico",
        "last_name": "Dunstall",
        "email": "ndunstall9@technorati.com",
        "gender": "Female",
        "ip_address": "37.12.213.144"
    }
];

/* 

    1. Find all people who are Agender
    2. Split their IP address into their components eg. 111.139.161.143 has components [111, 139, 161, 143]
    3. Find the sum of all the second components of the ip addresses.
    3. Find the sum of all the fourth components of the ip addresses.
    4. Compute the full name of each person and store it in a new key (full_name or something) for each person.
    5. Filter out all the .org emails
    6. Calculate how many .org, .au, .com emails are there
    7. Sort the data in descending order of first name

    NOTE: Do not change the name of this file

*/

// Question 1.

function agender(input) {
    return input.filter((element) => {
        return element.gender == 'Agender';
    });
}

// console.log(agender(input));

// Question 2.

function ipSplit(input) {
    return input.map((element) => {
        return element.ip_address.split('.');
    })
        .map((element) => {
            return Number(element);
        });
}

// console.log(ipSplit(input));

// Question 3.1.

function fourthIpComponentSum(input) {
    let totalSumFourthIpComponent = 0;
    input.map((element) => element.ip_address
        .split('.')
        .map((element) => {
            return Number(element);
        }))
        .forEach(element => {
            totalSumFourthIpComponent += element[1];
        })
    return totalSumFourthIpComponent;
}

// console.log(fourthIpComponentSum(input));

// Question 3.2.

function secondIpComponentSum(input) {
    let totalSumFourthIpComponent = 0;
    input.map((element) => element.ip_address.split('.')
        .map((element) => {
            return Number(element);
        }))
        .map(element => {
            totalSumFourthIpComponent += element[3];
        })
    return totalSumFourthIpComponent;
}

// console.log(secondIpComponentSum(input));

// Question 4.

function fullName(input) {
    let inputInludingFullName = [...input];
    inputInludingFullName.map((element) => {
        element.fullName = `${element.first_name} ${element.last_name}`;
    });
    return inputInludingFullName;
}

// console.log(fullName(input), input);

// Question 5.

function orgEmails(input) {
    let regEx = /.org/g;
    return input.filter((element) => {
        return regEx.test(element.email);
    });
}

// console.log(orgEmails(input));

// Question 6.

function orgAuComMails(input) {

    let regEx1 = /.org/g;
    let regEx2 = /.au/g;
    let regEx3 = /.com/g;

    return input.filter((element) => {
        return regEx1.test(element.email) ||
            regEx2.test(element.email) ||
            regEx3.test(element.email)
    });

}

console.log(orgAuComMails(input));

// Question 7.

function firstNamereverseSort(input) {
    return input.sort((a, b) => {
        if (a.first_name > b.first_name) {
            return -1;
        } else if (a.first_name < b.first_name) {
            return +1;
        } else {
            return 0;
        }
    });
}

// console.log(firstNamereverseSort(input));