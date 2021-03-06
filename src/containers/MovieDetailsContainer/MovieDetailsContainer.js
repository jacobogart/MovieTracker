import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMoviePeople from '../../api/fetchMoviePeople';
import { cleanPeople } from '../../api/cleaners';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { updateUserFavorites } from '../../actions';
import { fetchDeleteFavorite } from '../../thunks/fetchDeleteFavorite';

export class MovieDetailsContainer extends Component {
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
            history={this.props.history}
            user={this.props.user} 
            updateUserFavorites={this.props.updateUserFavorites} 
            deleteUserFavorite={this.props.deleteUserFavorite}
          />
        }
      </article>
    );
  }
}

export const mapStateToProps = (state) =>  ({
  user: state.user,
  movies: state.movies
});

export const mapDispatchToProps = (dispatch) => ({
  updateUserFavorites: (movieId) => dispatch(updateUserFavorites(movieId)),
  deleteUserFavorite: (userId, movieId) => dispatch(fetchDeleteFavorite(userId, movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);

MovieDetailsContainer.propTypes = {
  ispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  movies: PropTypes.array
};
