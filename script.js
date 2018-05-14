var movies = [{
        id: 1,
        title: 'Rubber',
        desc: 'film o oponie',
        poster: "https://images-na.ssl-images-amazon.com/images/I/913pPQTeUrL._SY445_.jpg",
        director: "Quentin Dupieux"
    },
    {
        id: 2,
        title: 'Evil Dead 2',
        desc: 'Ash kontra Martwe Zło',
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Evil_Dead_II_poster.jpg/220px-Evil_Dead_II_poster.jpg",
        director: "Sam Raimi"
    },
    {
        id: 3,
        title: 'Raven',
        desc: 'Powieśc Edgara Allana Poe',
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/RavenPoster.jpg/1200px-RavenPoster.jpg",
        director: "Roger Corman"
    },
    {
        id: 4,
        title: 'Zakazana planeta ',
        desc: 'Wysłana na planetę Altair ekspedycja odnajduje zaginionego doktora i jego córkę, jedynych ocalałych członków załogi statku "Bellerofont". Naukowiec skrywa jednak groźny sekret.',
        poster: "https://images-na.ssl-images-amazon.com/images/I/91%2BidOIPqcL._SL1500_.jpg",
        director: "Fred M. Wilcox",
    },
    {
        id: 5,
        title: 'Jay and Silent Bob Strike Back',
        desc: 'Jay i Cichy Bob jadą do Hollywood, aby przerwać produkcję ekranizacji komiksu z ich przygodami',
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Jay_and_Silent_Bob_Strike_Back_%28theatrical_poster%29.jpg/220px-Jay_and_Silent_Bob_Strike_Back_%28theatrical_poster%29.jpg",
        director: "Kevin Smith",
    },
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement("img", { src: movie.poster, alt: "poster" }),
        React.createElement("p", {}, movie.director)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));