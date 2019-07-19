
import constants from './../constants/index';

export const receivedMovies = json => ({
  type: constants.FETCH_MORE_MOVIES,
  json: json.results
});

export function fetchMoreMovies(page) {
  return function (dispatch) {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=74ae79aa13f66732b19cc309b44ba02e&language=en-US&page='+page)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedMovies(json));
      },
    );
  };
}