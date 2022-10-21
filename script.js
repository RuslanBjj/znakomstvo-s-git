 let numberOffilms;
 function start () {
    numberOffilms = prompt ("Сколько фильмов вы уже посмотрели?","");
    while (numberOffilms =="" || numberOffilms == null ||  isNaN(numberOffilms)) {
        numberOffilms = prompt ("Сколько фильмов вы уже посмотрели?","");
    }
 };
 start();
 const personalMovieDB = {
     count:numberOffilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false,
 } ;

    

         function rememberMyfilms () {
            for(let i=0;i<2; i++) {
    
                const voprosOne = prompt("Один из последних посмотренных фильмов?",""),
                   voprosTwo = prompt("На сколько оцените его?","");
                 
                   if (voprosOne != null && voprosTwo != null && voprosOne.length<50 
                    && voprosTwo.length<50 && voprosOne !=""
                   && voprosTwo !="") {
                     personalMovieDB.movies[voprosOne]=voprosTwo;
                     console.log('Все отлично'); }
                     else { 
                         console.log('error');
                         i--;
                        
                     }
         } ;
         rememberMyfilms();

        if (personalMovieDB.count < 10) {
           console.log('Вы смотрите мало фильмов');
            
        }
        else if (personalMovieDB.count >=10 && personalMovieDB<30) {
            console.log('вы классический зритель');
        }
        
         
   
        
      
      

 }
 function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Вы смотрите мало фильмов');
         
     }
     else if (personalMovieDB.count >=10 && personalMovieDB<30) {
         console.log('вы классический зритель');
     }
     

 }
 detectPersonalLevel ();

      
     console.log(personalMovieDB);

function showMyDB (hidden) {
    if ( !hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB ();
function writeYourGenres() {
    for (i=1; i<=3; i++) {
        const janr = prompt( `ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = janr;
    }
}
writeYourGenres() ;