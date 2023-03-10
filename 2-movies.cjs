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
};


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

    let moviesName = Object.keys(allMovies)
        .filter((element, index, array) => {

            return Number(allMovies[element].totalEarnings.slice(1, -1)) > 500;

        }).reduce((moviesEarns$500M, element, index, array) => {

            moviesEarns$500M[element] = { ...allMovies[element] };

            return moviesEarns$500M;

        }, {});

    return moviesName;

}

// console.log(moviesEarnsMoreThan$500M(favouritesMovies));

// Question 2.

function moviesEarns$500MAnd3Oscar(allMovies) {

    let moviesName = Object.keys(allMovies)
        .filter((element, index, array) => {

            return (allMovies[element].oscarNominations > 3) && (Number(allMovies[element].totalEarnings.slice(1, -1)) > 500);

        }).reduce((movies, element, index, array) => {

            movies[element] = { ...allMovies[element] };

            return movies;

        }, {});

    return moviesName;

}

// console.log(moviesEarns$500MAnd3Oscar(favouritesMovies));

// Question 3.

function leonardoDicaprioMovies(allMovies) {

    let moviesName = Object.keys(allMovies)
        .filter((element, index, array) => {

            return allMovies[element].actors.includes('Leonardo Dicaprio');

        }).reduce((movies, element, index, array) => {

            movies[element] = { ...allMovies[element] };

            return movies;

        }, {});

    return moviesName;

}

// console.log(leonardoDicaprioMovies(favouritesMovies));

// Question 4.

function sortingOnImdb(allMovies) {

    let moviesName = Object.keys(allMovies);

    moviesName.sort((firstMOvie, secondMovie) => {

        if(allMovies[firstMOvie].imdbRating > allMovies[secondMovie].imdbRating){

            return 1;

        }else if(allMovies[firstMOvie].imdbRating < allMovies[secondMovie].imdbRating){

            return -1;

        }else{

            if(Number(allMovies[firstMOvie].totalEarnings.slice(1, -1)) > Number(allMovies[secondMovie].totalEarnings.slice(1, -1))){

                return 1;

            }else if(Number(allMovies[firstMOvie].totalEarnings.slice(1, -1)) < Number(allMovies[secondMovie].totalEarnings.slice(1, -1))){

                return -1;

            }else {

                return 0;

            }

        }

    });

    return moviesName.reduce((imdbSortedMovies, element, index, array) => {

        imdbSortedMovies[element] = {...allMovies[element]};

        return imdbSortedMovies;

    }, {});

}

console.log(sortingOnImdb(favouritesMovies));

// Question 5.