const numberOfFilms = +prompt("Сколько вы уже посмотрели фильмов?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из послдених просмотренных фильмов?", ''),
      b = prompt("На сколько оцените его?", ''),
      c = prompt("Один из послдених просмотренных фильмов?", ''),
      d = prompt("На сколько оцените его?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);