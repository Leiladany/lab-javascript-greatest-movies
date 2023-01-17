// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayOfDirectors = moviesArray.map ((movie) => {
        return movie.director
    })
    return arrayOfDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesDirectedStevenS = moviesArray.filter ((movie) => {
        const movieDirectedByStevenS = movie.director === 'Steven Spielberg'

        const movieDrama = movie.genre.indexOf ('Drama') >= 0

        return movieDirectedByStevenS && movieDrama
    })
    return dramaMoviesDirectedStevenS.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length) {
        return 0;
      }
      const arrayOfScore = moviesArray.map(value => {
        return value.score;
      });
      const sumOfScore = arrayOfScore.reduce((sum, score) => {
        return sum + score;
      }, 0);
      return sumOfScore / moviesArray.length;
      
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama') 
       }) 
      averageScore = scoresAverage (dramaMovies)
      return averageScore 
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortMovies = [...moviesArray]
    sortMovies.sort((first, second) => {
        if (first.year > second.year) {
            return 1
        } else if (first.year < second.year) {
            return -1
        } else {
            return first.title.localeCompare(second.title)
        }
    })
    return sortMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray]
    sortedMovies.sort ((firstMovie, secondMovie) => {
        return firstMovie.title.localeCompare(secondMovie.title)
    })
    const movieTitles = sortedMovies.map((movie) => movie.title)
    return movieTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
        const moviesWithHoursTurnedToMinutes = moviesArray.map((movie) => {
          const movieWithHoursTurnedToMinutes = { ...movie };
          movieWithHoursTurnedToMinutes.duration = convertDurationToNumberOfMinutes(
            movie.duration
          )
          return movieWithHoursTurnedToMinutes;
        })
        return moviesWithHoursTurnedToMinutes;
      }



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
