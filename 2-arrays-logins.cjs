let input = [{ "id": 1, "first_name": "Valera", "last_name": "Pinsent", "email": "vpinsent0@google.co.jp", "gender": "Male", "ip_address": "253.171.63.171" },
{ "id": 2, "first_name": "Kenneth", "last_name": "Hinemoor", "email": "khinemoor1@yellowbook.com", "gender": "Polygender", "ip_address": "50.231.58.150" },
{ "id": 3, "first_name": "Roman", "last_name": "Sedcole", "email": "rsedcole2@addtoany.com", "gender": "Genderqueer", "ip_address": "236.52.184.83" },
{ "id": 4, "first_name": "Lind", "last_name": "Ladyman", "email": "lladyman3@wordpress.org", "gender": "Male", "ip_address": "118.12.213.144" },
{ "id": 5, "first_name": "Jocelyne", "last_name": "Casse", "email": "jcasse4@ehow.com", "gender": "Agender", "ip_address": "176.202.254.113" },
{ "id": 6, "first_name": "Stafford", "last_name": "Dandy", "email": "sdandy5@exblog.jp", "gender": "Female", "ip_address": "111.139.161.143" },
{ "id": 7, "first_name": "Jeramey", "last_name": "Sweetsur", "email": "jsweetsur6@youtube.com", "gender": "Genderqueer", "ip_address": "196.247.246.106" },
{ "id": 8, "first_name": "Anna-diane", "last_name": "Wingar", "email": "awingar7@auda.org.au", "gender": "Agender", "ip_address": "148.229.65.98" },
{ "id": 9, "first_name": "Cherianne", "last_name": "Rantoul", "email": "crantoul8@craigslist.org", "gender": "Genderfluid", "ip_address": "141.40.134.234" },
{ "id": 10, "first_name": "Nico", "last_name": "Dunstall", "email": "ndunstall9@technorati.com", "gender": "Female", "ip_address": "37.12.213.144" }]

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

function question1(input) {
    return input.filter((element) => element.gender == 'Agender');
}

// console.log(question1(input));

// Question 2.

function question2(input) {
    return input.map((element) => element.ip_address.split('.').map((element) => +element));
}

// console.log(question2(input));

// Question 3.1.

function question3_1(input) {
    let sumOf4thComponent = 0;
    input.map((element) => element.ip_address.split('.').map((element) => +element))
        .forEach(element => {
            sumOf4thComponent += element[1];
        })
    return sumOf4thComponent;
}

// console.log(question3_1(input));

// Question 3.2.

function question3_2(input) {
    let sumOf4thComponent = 0;
    input.map((element) => element.ip_address.split('.').map((element) => +element))
        .forEach(element => {
            sumOf4thComponent += element[3];
        })
    return sumOf4thComponent;
}

// console.log(question3_2(input));

// Question 4.

function question4(input){
    input.forEach((element) => element.fullName = `${element.first_name} ${element.last_name}`);
    return input;
}

// console.log(question4(input));