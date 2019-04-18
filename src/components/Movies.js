import React, { Component } from 'react';
import ListGroup from './ListGroup.js';
import Table from './Table.js';
import Pagination from './Pagination.js';
import {getMovies, getGenres} from '../data/moviesData.js'


class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genres: ["All Genres"],
      movies: [],
      selectedGenre: "All Genres",
      currentPage: "1",
      pageSize: "3",
      sortData: {
        column: "id",
        order: "asc"
      }
    };
  }
  
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [...this.state.genres, ...getGenres()]
    });
  }

  filterByGenre = () => {
    
    const sortBy = (key, order) => {
      const moveSmaller = (order === "des") ? 1 : -1;
      const moveLarger = (order === "des") ? -1 : 1;
      return (a, b) => {
        if (a[key] < b[key]) {
          return moveSmaller;
        }
        if (a[key] > b[key]) {
          return moveLarger;
        }
        return 0;
      };
    };
    var movieList = Object.assign([], this.state.movies);
    if (this.state.selectedGenre !== "All Genres") {
      movieList = movieList.filter(m => (m.genre === this.state.selectedGenre));
    }
    return movieList.sort(sortBy(this.state.sortData.column, this.state.sortData.order));
  }

  setGenreFilter(genre) {
    this.setState({
      selectedGenre: genre,
      currentPage: "1"
    });
  }

  makeFavorite(id) {
    this.setState({
      movies: this.state.movies.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    });

  }

  setCurrentPage(pageNum) {
    this.setState({
      currentPage: pageNum
    });
  }

  deleteMovie(id) {
    this.setState({
      movies: this.state.movies.filter(movie => movie.id !== id)
    });
  }

  setSortColumn(sortColumn) {
    const sortData = { ...this.state.sortData};
    sortData.order = (sortData.column !== sortColumn || sortData.order === "des")? "asc" : "des";
    sortData.column = sortColumn;
    this.setState({
      sortData
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
      <div className="row text-center">
        <div className="col-4">
          <ListGroup data={this.state.genres} onClick={selectedGenre => this.setGenreFilter(selectedGenre)} />
        </div>
        <div className="col-8">
          <Table columns={columns} data={currentMoviePage} totalItem={totalMovies} onSort={sortColumn => this.setSortColumn(sortColumn)}
            toggleLike={id => this.makeFavorite(id)} onDelete={id => this.deleteMovie(id)}  sortData= {this.state.sortData}/>
          <Pagination pageSize={this.state.pageSize} totalItem={totalMovies}
            currentPage={this.state.currentPage} onClick={pageNum => this.setCurrentPage(pageNum)}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
