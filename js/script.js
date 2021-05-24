const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних:", ""),
      b = prompt("На сколько оцените", ""),
      с = prompt("Один из последних:", ""),
      d = prompt("На сколько оцените", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);