const movies= [
    {
      "id": "1",
      "title": "The Hangover",
      "rank": "18",
      "genre": "Comedy",
      "rate": "8.5",
      "favorite": false
    },
    {
      "id": "2",
      "title": "The Matrix",
      "rank": "19",
      "genre": "Action",
      "rate": "8.2",
      "favorite": false
    },
    {
      "id": "3",
      "title": "Se7en",
      "rank": "22",
      "genre": "Thriller",
      "rate": "8.1",
      "favorite": true
    },
    {
      "id": "4",
      "title": "The Interview",
      "rank": "48",
      "genre": "Comedy",
      "rate": "8.5",
      "favorite": false
    },
    {
      "id": "5",
      "title": "How Fuzz",
      "rank": "38",
      "genre": "Comedy",
      "rate": "8.5",
      "favorite": false
    },
    {
      "id": "6",
      "title": "The Heart",
      "rank": "28",
      "genre": "Comedy",
      "rate": "8.5",
      "favorite": false
    },
    {
      "id": "7",
      "title": "Logan",
      "rank": "29",
      "genre": "Action",
      "rate": "8.2",
      "favorite": false
    },
    {
      "id": "8",
      "title": "Baby Driver",
      "rank": "39",
      "genre": "Action",
      "rate": "8.2",
      "favorite": false
    },
    {
      "id": "9",
      "title": "Taken",
      "rank": "49",
      "genre": "Action",
      "rate": "8.2",
      "favorite": false
    },
    {
      "id": "10",
      "title": "Get Out",
      "rank": "22",
      "genre": "Thriller",
      "rate": "8.1",
      "favorite": true
    },
    {
      "id": "11",
      "title": "Searching",
      "rank": "22",
      "genre": "Thriller",
      "rate": "8.1",
      "favorite": true
    },
    {
      "id": "12",
      "title": "Psycho",
      "rank": "22",
      "genre": "Thriller",
      "rate": "8.1",
      "favorite": true
    }
  ];

  const genres = ["Action", "Comedy", "Thriller"];

  export function getMovies() {
    return movies;
  }

  export function getGenres() {
    return genres;
  }