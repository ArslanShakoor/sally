import { FETCH_RENTALS, REMOVE_RENTALS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_RENTALS:
      return action.payload;
    case REMOVE_RENTALS:
      return [...action.payload];
    default:
      return state;
  }
}
