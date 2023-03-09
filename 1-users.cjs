const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}


/*

Q1 Find all users who are interested in playing video games.
Q2 Find all users staying in Germany.
Q3 Sort users based on their seniority level 
   for Designation - Senior Developer > Developer > Intern
   for Age - 20 > 10
Q4 Find all users with masters Degree.
Q5 Group users based on their Programming language mentioned in their designation.

NOTE: Do not change the name of this file

*/


// Question 1.

function usersPlayingVideoGames(users) {

    let usersClone = { ...users };

    let usersDetail = Object.values(usersClone);

    return usersDetail.filter((element, index, array) => {

        return element.interests.join('')
            .includes('Video Games');

    });

}

// console.log(usersPlayingVideoGames(users));

// Question 2.

function germanyUsers(users) {

    let usersDetail = Object.values(users);

    return usersDetail.filter((element, index, array) => {

        return element.nationality === 'Germany';

    });

}

// console.log(germanyUsers(users));

// Question 3.

function sortedUsersByAge(users) {

    let usersDetail = Object.values(users);

    return usersDetail.sort((first, second) => {
        if(first.age < second.age) {

            return 1;

        }else if (first.age > second.age) {

            return -1;

        }else {
            
             return 0;

        }
    })
}

// console.log(sortedUsersByAge(users));


function sortedUsersBySeniory(users) {

    let usersDetail = Object.values(users);

    return usersDetail.sort((first, second) => {
        if(first.age < second.age) {

            return 1;

        }else if (first.age > second.age) {

            return -1;

        }else {
            
             return 0;

        }
    })
}

// console.log(sortedUsersByAge(users));

// Question 4.

function masterDegreeUsers(users) {

    let usersDetail = Object.values(users);

    return usersDetail.map((element, index, array) => {

        return element.qualification === 'Masters';

    });

}

// console.log(masterDegreeUsers(users));

// Question 5.

function usersGroupOnProgrammingLanguage(users){

    let languageGroup = {};

    let usersName = Object.keys(users);

    let usersDetail = Object.values(users);

    usersDetail.map((element, index, array) => {

        if(languageGroup[element.desgination] === undefined) {

            languageGroup[element.desgination] = {};

            languageGroup[element.desgination][usersName[index]] = element;

        } else {

            languageGroup[element.desgination][usersName[index]] = element;
            
        }

    });

    return languageGroup;

}

console.log(usersGroupOnProgrammingLanguage(users));


