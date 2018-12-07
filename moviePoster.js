$(document).ready(init);

function init(){
    console.log('Init...');
    var moviePoster = new MoviePoster;
    moviePoster.renderPosters();
    // console.log('Init...', myMoviePoster);

}

var ajaxOptionsGetPoster = {
    url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=fb2158f8324ad535f0c817ef2fb98040',
    dataType: 'json',
    success: renderAllMoviePosters
};
$.ajax(ajaxOptionsGetPoster);


function renderAllMoviePosters(response) {
    var resultsArray = response['results'];
    console.log('results are:', resultsArray);

    var theMovie;

    for (var indexResult = 0; indexResult < resultsArray.length; indexResult++) {
        var movie = resultsArray[indexResult];
        getMoviePosterImage(movie);
        theMovie = new MoviePoster(movie);

    }

}



class MoviePoster{
    constructor(){
    this.response = responseArr;
    // console.log('oop response is:',responseArr);
    // console.log('oop response2 is:',this.response); // array of objects
    }
    renderPosters(){
        console.log('oop render posters...', this.response);

        // let resultsArray = this.results;
        let movie;
        for(let i = 0; i < this.response.length; i++) {
            this.movie = this.response[i];
            console.log('movie is...', this.movie);

            // movie = resultsArray[indexResult];
            // getMoviePosterImage(movie);
        }
        // console.log('movie is...');
        // getMoviePosterImage(movie);


    }

}

// function renderAllMoviePosters(response) {
//     var resultsArray = response['results'];
//     console.log('results are:', resultsArray);
//
//     let theMovie;
//
//     for (var indexResult = 0; indexResult < resultsArray.length; indexResult++) {
//         var movie = resultsArray[indexResult];
//         getMoviePosterImage(movie);
//
//         theMovie = new MoviePoster(movie);
//
//     }
//
// }

function getMoviePosterImage(movie) {
        // console.log('get movie...'); // blank

        var title = movie.title;
        var movieId = movie.id;
        var ratings = movie.vote_average;
        var description = movie.overview;
        var poster = movie.poster_path;

        var image = $("<div>",{
            class: 'poster',
            css:{
                backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster})`
            },
            'data-movieInfo': {
                title,
                movieId,
                ratings,
                description,
                poster
            },
            click: handleModalShow
        });
    $(".testDiv").append(image);

    function handleModalShow(){
        console.log('handleModalShow...');

        $(".modalPageContainer").css('display', 'block');
    }
}


// function renderAllMoviePosters(response) {
//     var resultsArray = response['results'];
//
//     for (var indexResult = 0; indexResult < resultsArray.length; indexResult++) {
//         var movie = resultsArray[indexResult];
//         getMoviePosterImage(movie);
//     }
// }




