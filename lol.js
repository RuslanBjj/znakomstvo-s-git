// const myBaby = {
//   beatifule:true,
//   skills: 'clear',
//   ass:'big',
//   company:{
//     howLong:'two Years',
//     howlike:'so so'
//   }
// }
// const {howLong,howlike}= myBaby.company;
// console.log(howLong);
// for (let key in myBaby) { 
//   if (typeof(myBaby[key])==='object') {
//     for (let i in myBaby[key]) {
//       console.log (`Свойство ${i} значение ${myBaby[key][i]}`);
//     }
//   } else {
//     console.log (`Свойство ${key} значение ${myBaby[key]}`);
//   }


//  console.log(Object.keys(myBaby).length);

// const mas = [1,4,'lol',true];
// mas.forEach(function(lolkek,i,mas){
//   console.log(`${i}: ${lolkek} от массива ${mas} `)
// });
// function copy(glavOb) {
//   let copyOb = {};
//   let key;
//   for (key in glavOb){
//     copyOb[key]=glavOb[key];
//   }
//   return copyOb;
// }
// const spisok = {
//   gela:'norm',
//   cool:true,
//   year:24
// }
// const nowSoOb = copy(spisok);
// nowSoOb.year=25;
// console.log(spisok);
//    console.log(nowSoOb);

// const grom = {
//   krasota:'ogoni',
//   ejaz:'maksimum'
// };
// const cky = {
//   color:'blue',
//   when:'all'
// };
// Object.assign(cky,grom);
// console.dir(cky);
// const masik=[1,'avd',true];
// const newmas=masik.slice();
// newmas[2]=false;
// console.log(masik);
// console.log(newmas);
// const soldat = {
//   health:400,
//   armor:100,
//   sayHellow:function() {
//     console.log("Heloow");
//   }
// };
// const rembo = Object.create(soldat);
// rembo.sayHellow();

// const personalMovieDB = {
//     count: 0,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false,
//     start: () => {
//     personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "")
// while (personalMovieDB.count=="" || personalMovieDB.count==null || isNaN(personalMovieDB.count) ) {
//     personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
// } },
// askedQuestion: () => {
//     for(let i=1;i<3;i++) {
    
//         const voprosOne = prompt("Один из последних посмотренных фильмов?",""),
//           voprosTwo = prompt("На сколько оцениваете его?","");
//           if (voprosOne !=null && voprosTwo !=null && voprosOne !="" &&voprosTwo !="" 
//     &&voprosOne.length < 50 && voprosTwo.length <50) {
          
//           personalMovieDB.movies[voprosOne]=voprosTwo; 
//         console.log("Все ответы хороши") ;
//     } else {
//         i--; }
//     } 
//     } ,
//     ozenka: ()=> {
//         if (personalMovieDB.count <10) {
//             console.log("довольно мало")
//         } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
//             console.log( "Вы стандартный зритель")
//         } else if (personalMovieDB.count > 30) {
//             console.log("вы киноман")
//         }
//               console.log(personalMovieDB);
//         },
//         showMyDB: (hiden)=> {
// if (!hiden) {
//     console.log(personalMovieDB);
// }
//         },
//         writeYourGenres:()=>{
//             for (i=1;i<3;i++){
//                 personalMovieDB.genres[i-1]= prompt(`ваш любимый жанр под номером  ${i}`);
//             } if(personalMovieDB.genres===null&&personalMovieDB.genres==="") {
//                 i--;
//             }
//             personalMovieDB.genres.forEach(function(lolkek,i,personalMovieDB){
//                 console.log(`Любимый жанрк ${i} это название из массива ${lolkek}
//                  из ${personalMovieDB}`)
//             })
//         },
//         togglevisib : () => {
//             if ( personalMovieDB.privat) {
//               personalMovieDB.privat=false
//             } else { personalMovieDB.privat=true }
              

// },
// writeYourGenres:()=>{
//     while (personalMovieDB.genres===null&&personalMovieDB.genres==="") {

//     }
// }

// };
let numberOfFilms ;
function start(){
    numberOfFilms = prompt("Cколько фильмов вы посмотрели?","");
while (numberOfFilms ===""||numberOfFilms===null|| isNaN(numberOfFilms)){
    numberOfFilms = prompt("Cколько фильмов вы посмотрели?","");
}
} 
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
                         }; 
function askedMovies () {
for(let i=1;i<3;i++) {
    const voprosOne= prompt("Последний посмотренный фильм?",""),
      voprosTwo= prompt("На сколько вы его оцениваете?", "");
      if(voprosOne !=""&&voprosTwo!=""&& voprosOne!=null 
      &&voprosTwo!=null &&voprosOne.length<50 && !isNaN(voprosTwo)) {
        personalMovieDB.movies[voprosOne]= voprosTwo;
      } else {i--;}
} }
askedMovies();


function ultim(){
if (personalMovieDB.count<10) {
    console.log("Довольно мало");
} else if (personalMovieDB.count>=10 && personalMovieDB.count <20 ) {
    console.log("нормально");
}else if (personalMovieDB.count>=20 && personalMovieDB.count <30 ) {
    console.log("хорошо");
}else if (personalMovieDB.count>=30 && personalMovieDB.count <50 ) {
    console.log("отлично");
} else {console.log("Вы безумец");}
}
ultim();
      
      
function showMyDB () {
      if(personalMovieDB.privat===false){
        console.log(personalMovieDB);
      }
    }
    showMyDB();

    function writeYourGenres () {
        for (let i=1;i<4;i++) {
            const otvet = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i-1]=otvet;
        }
    }
    writeYourGenres();

      
