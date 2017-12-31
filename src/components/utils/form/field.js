// we can render any type fields with tie field resuseable components

import React from 'react';

export default ({
  input,
  label,
  type,
  design,
  req,
  hr,
  rows,
  name,
  placeholder,
  meta: { error, touched }
}) => {
  if (type === 'text' || type === 'email' || type === 'date') {
    return (
      <div>
        <div style={{ ...styles.fieldStyle, ...styles[design] }}>
          <label style={styles.label}>
            {label}
            <span className={req ? 'req' : ''} />
          </label>
          <br />

          <input style={styles.input} {...input} placeholder={placeholder} />

          <div style={styles.error}>{touched && error}</div>
        </div>
        <div style={{ display: hr }}>
          <div style={styles.hrPadding} />
          <hr style={styles.hr} />
        </div>
      </div>
    );
  } else if (type === 'select') {
    return (
      <div>
        <div style={{ ...styles.fieldStyle, ...styles[design] }}>
          <label style={styles.label}>
            {label}
            <span className={req ? 'req' : ''} />
          </label>
          <br />
          <select {...input} style={styles.input}>
            <option defaultValue value={input.value}>
              {input.value}
            </option>
            <option value="active">Active</option>
            <option value="returned">Returned</option>
            <option value="archived">Archived</option>
            <option value="reserved">Reserved</option>
          </select>
        </div>
        <div style={{ display: hr }}>
          <div style={styles.hrPadding} />
          <hr style={styles.hr} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ ...styles.fieldStyle, ...styles[design] }}>
          <label style={styles.label}>
            {label}
            <span className={req ? 'req' : ''} />
          </label>
          <br />

          <input
            style={{ ...styles.input, ...styles.formControl }}
            {...input}
            placeholder="&#xF002;"
          />

          <div style={styles.error}>{touched && error}</div>
        </div>
        <div style={{ display: hr }}>
          <div style={styles.hrPadding} />
          <hr style={styles.hr} />
        </div>
      </div>
    );
  }
};

var styles = {
  label: {
    fontSize: '14px'
  },
  fieldStyle: {
    marginTop: '20px',
    textAlign: 'left',
    paddingLeft: '30px',
    paddingRight: '30px'
  },
  input: {
    fontSize: '25px',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #000000',
    width: '100%'
  },
  col3: {
    float: 'left',
    width: '25%'
  },

  col4: {
    float: 'left',
    width: '33.33%'
  },

  col5: {
    float: 'left',
    width: '41.66%'
  },
  col6: {
    float: 'left',
    width: '50%'
  },
  col10: {
    float: 'left',
    width: '83.3%'
  },
  col12: {
    float: 'left',
    width: '100%'
  },

  hr: {
    border: 0,
    height: '2px',
    background: 'grey'
  },

  hrPadding: {
    clear: 'both',
    paddingTop: '30px',
    paddingBottom: '20px'
  },
  error: {
    color: 'red'
  },
  searchField: {
    backgroundImage: 'url()',
    backgroundRepeat: 'no-repeat',
    textIndent: '20px'
  },
  formControl: {
    fontFamily: 'FontAwesome'
  }
};
