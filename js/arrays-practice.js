//STEP 1
/*const favMovies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
window.console.log(favMovies [1])*/

//STEP 2
/*const movies = new Array(5);
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
window.console.log(movies [0])*/

//STEP 3
/*const movies = new Array(5);
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [5] = "Movie6";
movies [4] = "Movie5";
window.console.log(movies.length)*/

//STEP 4
/*const movies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
delete movies [0]
window.console.log(movies)*/

//STEP 5
/*const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";
let displayString = "";
for (const i in movies) {
    displayString += movies[i] + "\n";
}
window.console.log(displayString)*/

//STEP 6
/*const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";
let displayString = "";
for (const val of movies) {
    displayString += val + "\n";
}
window.console.log(displayString)*/

//STEP 7
/*const movies = []
movies [0] = "BMovie";
movies [1] = "DMovie";
movies [2] = "AMovie";
movies [3] = "FMovie";
movies [4] = "YMovie";
movies [5] = "SMovie";
movies [6] = "QMovie";
let displayString = "";
for (const val of movies) {
    displayString += val + "\n";
}
window.console.log(movies.sort())*/
    
//STEP 8

/*var i;
const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";

const leastFavMovies = []
leastFavMovies [0] = "Movie8";
leastFavMovies [1] = "Movie9";
leastFavMovies [2] = "Movie10";

window.console.log("");
window.console.log("Movies I like:");
window.console.log("");
let moviesILike = "";
for (const i in movies) {
    moviesILike += movies[i] + "\n";
}
window.console.log(moviesILike)

window.console.log("");
window.console.log("Movies I don`t like:");
window.console.log("");
let moviesIHate = "";
for (const i in leastFavMovies) {
    moviesIHate += leastFavMovies[i] + "\n";
}
window.console.log(moviesIHate)*/

//STEP 9
/*var i;
const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";

const leastFavMovies = []
leastFavMovies [0] = "Movie8";
leastFavMovies [1] = "Movie9";
leastFavMovies [2] = "Movie10";

window.console.log(movies.concat(leastFavMovies).reverse());*/

//STEP 10

/*const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";

const leastFavMovies = []
leastFavMovies [0] = "Movie8";
leastFavMovies [1] = "Movie9";
leastFavMovies [2] = "Movie10";

const allMovies = movies.concat(leastFavMovies);
const lastItem = allMovies[allMovies.length - 1]
;
window.console.log(lastItem)*/

//STEP 11
/*const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";

const leastFavMovies = []
leastFavMovies [0] = "Movie8";
leastFavMovies [1] = "Movie9";
leastFavMovies [2] = "Movie10";

const allMovies = movies.concat(leastFavMovies);
const firstItem = allMovies[0]
;
window.console.log(firstItem)*/

//STEP 12
/*const movies = []
movies [0] = "Movie1";
movies [1] = "Movie2";
movies [2] = "Movie3";
movies [3] = "Movie4";
movies [4] = "Movie5";
movies [5] = "Movie6";
movies [6] = "Movie7";

const leastFavMovies = []
leastFavMovies [0] = "Movie8";
leastFavMovies [1] = "Movie9";
leastFavMovies [2] = "Movie10";

const allMovies = movies.concat(leastFavMovies);
allMovies.splice(7,8, "MovieILike1", "MovieILike2", "MovieILike3")
window.console.log(allMovies)*/

//STEP 13
var i;
var favMovies = [["Movie1", 1], ["Movie2", 2], ["Movie3", 3],["Movie4", 4], ["Movie5", 5]];
/*for (i=0; i < favMovies.length; i +=1) {
 window.console.log(favMovies[i] [0] + "");   
}*/
favMovies.forEach(function(item) {
    window.console.log(item[0] + " ");   
})


//STEP 14

//STEP 15

//STEP 16

//STEP 17