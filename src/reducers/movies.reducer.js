
import constants from './../constants/index';

export default function(state = [], action) {
  switch (action.type) {
    case constants.FETCH_MORE_MOVIES:
    	if(action.json != undefined) {
    		var newState = [...state, ...action.json];
    		// alert(JSON.stringify(newState.length));
      		return newState ;
    	}
      	return state;
    default:
    // alert(JSON.stringify(state.length));
      return state;
  }
};