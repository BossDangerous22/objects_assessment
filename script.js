// Array of three objects representing top 3 favorite movies
const favoriteMovies = [
    {
        name: "Twister",
        year: 1996,
        director: "Jan de Bont",
        picture: "https://i5.walmartimages.com/seo/Twister-DVD_1cc2ef40-404d-43b8-b0a3-75e3ffed1773.caf417156dd2130b1096395ebd96babc.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
    },
    {
        name: "What's Love Got To Do With It",
        year: 1993,
        director: "Brian Gibson",
        picture: "https://i5.walmartimages.com/asr/220bd954-ee24-43af-9084-781380480263_1.945cc55a27814da22c2164e7a4a3bf2e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
    },
    {
        name: "Forrest Gump",
        year: 1994,
        director: "Robert Zemeckis",
        picture: "https://i5.walmartimages.com/seo/Forrest-Gump-25th-Anniversary-Blu-ray-Digital-Copy_b6e28822-d145-465d-b36c-5e5f72e4f962.c777167a15d34d2c5aa11ed23f3b615c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
    }
];

// Creates the list item for each movie object
function createMovieListItem(movie) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h3>${movie.name} (${movie.year})</h3>
        <p>Director: ${movie.director}</p>
        <img src="${movie.picture}" alt="${movie.name} Poster">
    `;
    return listItem;
}

// Getting the organized list element
const movieList = document.getElementById('movie-list');

// Adding movie information to the page
favoriteMovies.forEach(movie => {
    const listItem = createMovieListItem(movie);
    movieList.appendChild(listItem);
});
