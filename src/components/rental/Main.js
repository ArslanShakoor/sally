// Main component of our project It shows the list of rentals and search
import React, { Component } from 'react';
import * as actions from '../../actions/';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import customField from './customField';
import formatDateTime from '../utils/common_methods/formatDateTime';
import capitalizeFirstLetter from '../utils/common_methods/capitalizeFirstLetter';
import renderForm from '../utils/form/renderForm';
import '../../assets/icons/css/materialdesignicons.min.css';
import { MODAL_TYPE_EDIT_RENTAL } from '../modal/types';
import _ from 'lodash';

class Main extends Component {
  componentDidMount() {
    this.props.fetchRentals();
  }

  onSearch = event => {
    this.props.filterResult(event.target.value);
  };

  showNotification = values => {
    this.props.showModal(MODAL_TYPE_EDIT_RENTAL, {
      title: values
    });
  };

  //showing the list of rentals with table
  showRentals(values) {
    return _.map(values, rental => {
      return (
        <tr
          key={rental.id}
          style={styles.tr}
          onClick={() => this.showNotification(rental)}
        >
          <td style={styles.td}>
            <span style={styles.status[capitalizeFirstLetter(rental.status)]}>
              {capitalizeFirstLetter(rental.status)}
            </span>
          </td>
          <td style={styles.td}>
            {rental.first_name} {rental.last_name}
          </td>

          <td style={styles.td}>{capitalizeFirstLetter(rental.vehicle)}</td>
          <td style={styles.td}>{formatDateTime(rental.start_date)}</td>
          <td style={styles.td}>{formatDateTime(rental.end_date)}</td>
          <td style={styles.td}>{rental.rate}</td>
        </tr>
      );
    });
  }
  // we are rendering form for search field with the help of renderForm
  form = handleSubmit => {
    return (
      <form onChange={this.onSearch}>
        <div style={styles.searchBar}>
          {renderForm(customField.slice(0, 2))}
        </div>
      </form>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={styles.main}>
        <div style={styles.rentalHeader}>
          <div style={styles.fontRental}>Rentals</div>
          <div style={styles.fontTotal}>
            {' '}
            {this.props.rental ? this.props.rental.length : null} total
          </div>
        </div>
        <div>{this.form(handleSubmit)} </div>
        <table style={styles.table}>
          <tbody>{this.showRentals(this.props.rental)}</tbody>
        </table>
      </div>
    );
  }
}

//styling
var styles = {
  main: {
    width: '100%'
  },
  searchBar: {
    marginRight: '-60px',
    marginTop: '-20px',
    float: 'right',
    paddingBottom: '20px'
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  input: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #000000'
  },

  tr: {
    borderBottom: '2pt solid white',
    paddingTop: '10px',
    backgroundColor: '#ededed',
    fontSize: '17px'
  },
  td: {
    borderBottom: '2px',
    padding: '5px 20px 5px 20px'
  },
  rentalHeader: {
    minWidth: '100%',
    paddingLeft: '15px',
    backgroundColor: '#808080'
  },

  fontRental: {
    paddingTop: '16px',
    fontSize: '40px',
    color: '#ffffff',
    backgroundColor: '#808080'
  },
  fontTotal: {
    fontSize: '18px',
    color: '#ffffff',
    paddingBottom: '10px'
  },
  status: {
    Reserved: {
      color: '#990000'
    },
    Active: {
      color: '#f59514'
    },
    Returned: {
      color: '#CD96CD'
    },
    Archived: {
      color: '#000000'
    }
  }
};
function mapStateToProps({ rental }) {
  return {
    rental
  };
}

export default reduxForm({
  form: 'validate'
})(connect(mapStateToProps, actions)(Main));
