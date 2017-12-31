// render form
import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import field from './field';

const renderForm = postFields => {
  return _.map(
    postFields,
    ({ name, label, type, req, design, rows, hr, placeholder }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          design={design}
          rows={rows}
          req={req}
          hr={hr}
          component={field}
          placeholder={placeholder}
        />
      );
    }
  );
};

export default renderForm;
