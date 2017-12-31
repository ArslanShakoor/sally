import { FETCH_RENTALS, REMOVE_RENTALS, SHOW_MODAL, HIDE_MODAL } from './types';
import rentals from '../data/rentals';
import _ from 'lodash';
// async await syntax

export const deleteRental = props => async dispatch => {
  let data = await rentals;
  const res = spliceArray(data, props);
  dispatch({ type: REMOVE_RENTALS, payload: res });
};

export const editRental = props => async dispatch => {
  let data = await rentals;
  const res = editArray(data, props);
  dispatch({ type: REMOVE_RENTALS, payload: res });
};

export const fetchRentals = () => async dispatch => {
  const res = await rentals;
  dispatch({ type: FETCH_RENTALS, payload: res });
};

export const filterResult = searchTerm => async dispatch => {
  let res = await rentals;
  console.log(searchTerm.length);
  if (searchTerm.length < 1) {
    return dispatch({ type: FETCH_RENTALS, payload: res });
  }
  res = await filterMethod(res, searchTerm);
  dispatch({ type: FETCH_RENTALS, payload: res });
};

export const showModal = (type, props) => ({
  type: SHOW_MODAL,
  payload: {
    type,
    props
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL
});

function filterMethod(values, searchTerm) {
  return _.filter(values, rental => {
    return (
      rental.first_name.toLowerCase() === searchTerm.toLowerCase() ||
      rental.last_name.toLowerCase() === searchTerm.toLowerCase() ||
      rental.vehicle.toLowerCase() === searchTerm.toLowerCase() ||
      rental.email.toLowerCase() === searchTerm.toLowerCase()
    );
  });
}

function spliceArray(data, props) {
  let removeIndex = data.findIndex(x => x.id === props.id);
  data.splice(removeIndex, 1);
  return data;
}

function editArray(data, props) {
  let removeIndex = data.findIndex(x => x.id === props.id);
  data.splice(removeIndex, 1, props);
  return data;
}
