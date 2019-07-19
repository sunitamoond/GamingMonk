
import constants from './../constants/index';

export default function(state = [], action) {
  switch (action.type) {
    case constants.FETCH_MORE_MOVIES:
    	if(action.json != undefined) {
    		var newState = [...state, ...action.json];
      		return newState ;
    	}
      	return state;
    default:
      return state;
  }
};