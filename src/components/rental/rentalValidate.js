// this function is helping us to validate and we can also make it utility and reusable like fild and renderForm
import editFields from './editFields';
import _ from 'lodash';

export default values => {
  const errors = {};
  _.each(editFields, ({ name, req, min_length, max_length, type }) => {
    if (name === 'email') {
      if (!values[name] && req) {
        errors[name] = `Please enter the ${name}`;
      } else if (values[name] && !validateEmail(values[name])) {
        errors[name] = `Enter Valid Email`;
      }
    } else if (type === 'date') {
      if (!values[name] && req) {
        errors[name] = `Please enter the ${name}`;
      } else if (values[name] && !validateDate(values[name], name)) {
        errors[name] = `Enter Valid date and time`;
      }
    } else {
      if (!values[name] && req) {
        errors[name] = `Please enter the ${name}`;
      } else if (
        values[name] &&
        (values[name].length < min_length || values[name].length > max_length)
      ) {
        errors[name] = `Enter between ${min_length} and ${max_length} chars`;
      }
    }
  });
  return errors;
};
// validation of email with regex
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

// validation of date and time with regex
function validateDate(date, name) {
  if (name === 'end_date' && date.length < 2) {
    return true;
  }

  let re = /^((0?[123456789]|10|11|12)([.])(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))([.])((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))) (1[0-2]|0?[1-9]):[0-5][0-9](a|p)$/;
  return re.test(date);
}
