import { combineReducers } from 'redux';
import MovieReducer from './movies.reducer';

export default combineReducers({
     Movies: MovieReducer
});