import { combineReducers } from 'redux';
import rentalReducer from './rentalReducer';
import modalReducer from './modalReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  rental: rentalReducer,
  form: reduxForm,
  modal: modalReducer
});
