
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function (){
        for (let i=0; i<2;i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else {
                console.log('error');
                i--;
            }
        }
    },
    detectMyLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log('Вы классический зритель');
        }else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function () {
        for ( let i=1; i <= 3; i++){
        
            let genres = prompt(`Ваш любимый жанр под номером  ${i}`);

            if (genres == '' || genres == null){
                console.log ('не правильный или пустой ввод');
                i--;
            }else {
                personalMovieDB.genres[i-1] = genres;
            }
            
        }
    
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`${i + 1} -  любимый жанр: ${item}`);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true; 
        }

    },
    showMyDB: function () {
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
      }

};


// function showFirstMessage(text){
//     console.log(text);
// }
// showFirstMessage('Hello world');

// const logger = function (){
//     console.log('Hello')
// }

// logger();

// const calc = (a, b) => a + b;

// console.log(calc(5,6));

// const logg ="Hello world";

// console.log(logg.slice(6,9));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6, 5));

// const test = "12.2px";
// console.log(parseInt(test));

// function test (lang, callback){
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function test2 (){
//     console.log('callback test2');
// }

// test('JAVA', function() {
//     console.log('from callback');
// });
// test('JAVA', test2);

// const obj = {
//     name: 'Test',
//     lastName: 'Testov',
//     age: '45',
//     middleName: 'Testovich',
//     colors:  { 
//         border: 'red',
//         bg: 'green'
//     }
// }

// const {border, bg} = obj.colors;

// console.log(bg);

// for (key in obj){
//     if (typeof(obj[key]) == 'object'){
//         for (i in obj[key]){
//             console.log(`Объект имеет свойство ${i} со значением ${obj[key][i]} `);
//         }
//     }else {
//         console.log(`Объект имеет свойство ${key} со значением ${obj[key]} `);
//     }
// }

// console.log(Object.keys(obj))

// const arr = [0, 3, 45, 78, 5, 96, 1, 7];

// for (i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (value of arr){
//     console.log(value);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} - в массиве ${arr}`);
// });