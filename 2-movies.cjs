const favouritesMovies = {
    "Matrix": {
        imdbRating: 8.3,
        actors: ["Keanu Reeves", "Carrie-Anniee"],
        oscarNominations: 2,
        genre: ["sci-fi", "adventure"],
        totalEarnings: "$680M"
    },
    "FightClub": {
        imdbRating: 8.8,
        actors: ["Edward Norton", "Brad Pitt"],
        oscarNominations: 6,
        genre: ["thriller", "drama"],
        totalEarnings: "$350M"
    },
    "Inception": {
        imdbRating: 8.3,
        actors: ["Tom Hardy", "Leonardo Dicaprio"],
        oscarNominations: 12,
        genre: ["sci-fi", "adventure"],
        totalEarnings: "$870M"
    },
    "The Dark Knight": {
        imdbRating: 8.9,
        actors: ["Christian Bale", "Heath Ledger"],
        oscarNominations: 12,
        genre: ["thriller"],
        totalEarnings: "$744M"
    },
    "Pulp Fiction": {
        imdbRating: 8.3,
        actors: ["Sameul L. Jackson", "Bruce Willis"],
        oscarNominations: 7,
        genre: ["drama", "crime"],
        totalEarnings: "$455M"
    },
    "Titanic": {
        imdbRating: 8.3,
        actors: ["Leonardo Dicaprio", "Kate Winslet"],
        oscarNominations: 13,
        genre: ["drama"],
        totalEarnings: "$800M"
    }
}


/*
    NOTE: For all questions, the returned data must contain all the movie information including its name.

    Q1. Find all the movies with total earnings more than $500M. 
    Q2. Find all the movies who got more than 3 oscarNominations and also totalEarning are more than $500M.
    Q3. Find all movies of the actor "Leonardo Dicaprio".
    Q4. Sort movies (based on IMDB rating)
        if IMDB ratings are same, compare totalEarning as the secondary metric.
    Q5. Group movies based on genre. Priority of genres in case of multiple genres present are:
        drama > sci-fi > adventure > thriller > crime

    NOTE: Do not change the name of this file
*/

// Question 1.

function moviesEarnsMoreThan$500M(allMovies) {

    let allMoviesName = Object.keys(allMovies);
    let allMoviesInforamtion = Object.values(allMovies);

    allMoviesInforamtion.map((element, index, array) => {

        return Number(element.totalEarnings.slice(1, -1)); 

    });

    return allMovies;

}

// console.log(moviesEarnsMoreThan$500M(favouritesMovies));

// Question 2.

// Question 3.

function leonardoDicaprioMovies(allMovies) {

    let actorLeonardoDicaprioMovies = {};

    let moviesName = Object.entries(allMovies);
    let moviesInformation = Object.values(allMovies);

    return moviesInformation.reduce((accumulator, element, index, array) => {

        if(element.actors.includes('Leonardo Dicaprio')){

            accumulator[moviesName[index]] = element;

        }

        return accumulator;

    }, {});

}

console.log(leonardoDicaprioMovies(favouritesMovies));

// Question 4.

// Question 5.