import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchMoviePeople from '../../api/fetchMovieDetails';
import { cleanPeople } from '../../api/cleaners';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { updateUserFavorites, deleteUserFavorite } from '../../actions';
import { fetchDeleteFavorite } from '../../thunks/fetchDeleteFavorite';

class MovieDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: {},
      movieId: props.location.pathname.split("/")[2],
    }
  }

  componentDidMount() {
    const { movieId } = this.state;

    fetchMoviePeople(movieId)
    .then(data => cleanPeople(data))
    .then(people => this.setState({ people }));
  }
  
  render() {
    const movie = this.props.movies.find(movie => movie.id == this.state.movieId);
    const { people } = this.state;

    return (
      <article>
        {movie && people &&
          <MovieDetails 
            movieDetails={movie}
            people={people}
            user={this.props.user} 
            updateUserFavorites={this.props.updateUserFavorites} 
            deleteUserFavorite={this.props.deleteUserFavorite}
          />
        }
      </article>
    );
  }
}

const mapStateToProps = (state) =>  ({
  user: state.user,
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  updateUserFavorites: (movieId) => dispatch(updateUserFavorites(movieId)),
  deleteUserFavorite: (userId, movieId) => dispatch(fetchDeleteFavorite(userId, movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);