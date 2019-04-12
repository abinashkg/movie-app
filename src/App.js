import React, { Component } from 'react';
import ListGroup from './components/ListGroup.js';
import Table from './components/Table.js';
import './App.css';
import Pagination from './components/Pagination.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      genres: ["All Genres", "Action", "Comedy", "Thriller"],
      movies: [
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
      ],
      selectedGenre: "All Genres",
      currentPage: "1",
      pageSize: "3"
    };
  }

  filterByGenre = () => {
    if(this.state.selectedGenre === "All Genres"){
      return this.state.movies;
    }
    else{
      return this.state.movies.filter(m => (m.genre === this.state.selectedGenre));
    }
  }

  setGenreFilter(genre){
    this.setState({
      selectedGenre: genre,
      currentPage: "1"
    });
  }

  makeFavorite(id){
    this.setState({
      movies: this.state.movies.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    });
    
  }

  setCurrentPage(pageNum){
    this.setState({
      currentPage: pageNum
    });
  }

  deleteMovie(id){
    this.setState({
      movies: this.state.movies.filter(movie => movie.id !== id)
    });
  }

  render() {
    const columns = [
      {
        header: "Title",
        accessor: "title",
      },
      {
        header: "Rank",
        accessor: "rank",
      },
      {
        header: "Genre",
        accessor: "genre",
      },
      {
        header: "Rate",
        accessor: "rate",
      }
    ];
    const movieList = this.filterByGenre();
    const totalMovies = movieList.length;
    const currentMoviePage = movieList.slice((this.state.currentPage - 1) * this.state.pageSize,
      this.state.currentPage * this.state.pageSize)
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Movie App</a>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4">
              <ListGroup data= {this.state.genres} onClick={selectedGenre => this.setGenreFilter(selectedGenre)}/>
            </div>
            <div className="col-8">
              <Table  columns={columns} data={currentMoviePage} totalItem={totalMovies}
              toggleLike={id => this.makeFavorite(id)} onDelete={id => this.deleteMovie(id)}/>
              <Pagination pageSize={this.state.pageSize} totalItem={totalMovies} 
              currentPage ={this.state.currentPage} onClick={pageNum => this.setCurrentPage(pageNum)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
