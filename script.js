
const numberOffilms = prompt("Сколько фильмов вы уже посмотрели?","");
const PersonalMovie = {
    count:numberOffilms,
    actors:{},
    movies: {},
    genres:[],
    privat: false
} ;
const vopros = prompt ("один из последних просмотренных фильмов?", "") ,
     voprosDva = prompt("На сколько оцените его?", "") ;
     

PersonalMovie.movies[vopros ]= voprosDva ;


console.log(PersonalMovie) ;
