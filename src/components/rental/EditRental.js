import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import editFields from './editFields';
import renderForm from '../utils/form/renderForm';
import * as actions from '../../actions';
import Modal from '../modal/Modal';
import formatDateTime from '../utils/common_methods/formatDateTime';
import capitalizeFirstLetter from '../utils/common_methods/capitalizeFirstLetter';
import validate from './rentalValidate';
import formatDateTime24 from '../utils/common_methods/formatDateTime24';

class EditRental extends Component {
  constructor(props) {
    super(props);
    this.handleInitialize();
  }

  editForm = value => {
    value.start_date = formatDateTime24(value.start_date);
    value.end_date = formatDateTime24(value.end_date);
    this.props.editRental(value);
    this.onClose();
  };

  deleteForm = value => {
    this.props.deleteRental(value);
    this.onClose();
  };
  handleInitialize() {
    const rental = this.props.title;
    const initData = {
      id: this.props.title.id,
      first_name: rental.first_name,
      last_name: rental.last_name,
      end_date: formatDateTime(rental.end_date),
      start_date: formatDateTime(rental.start_date),
      vehicle: capitalizeFirstLetter(rental.vehicle),
      rate: rental.rate,
      email: rental.email,
      status: capitalizeFirstLetter(rental.status)
    };

    this.props.initialize(initData);
  }
  onClose = () => {
    this.props.hideModal();

    if (this.props.afterClose) {
      this.props.afterClose();
    }
  };

  form = handleSubmit => {
    return (
      <form>
        <div>{renderForm(editFields)}</div>
        <div style={styles.empty} />
        <div style={styles.formFooter}>
          <span style={styles.delete}>
            <button
              style={{ ...styles.button, ...styles.button.deleteButton }}
              onClick={handleSubmit(this.deleteForm)}
            >
              DELETE
            </button>
          </span>
          <span style={styles.save}>
            <button
              style={{ ...styles.button, ...styles.button.saveButton }}
              onClick={handleSubmit(this.editForm)}
            >
              SAVE
            </button>
          </span>
        </div>
      </form>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Modal
        title={this.props.title.vehicle}
        status={this.props.title.status}
        onClose={this.onClose}
      >
        <div>{this.form(handleSubmit)}</div>
      </Modal>
    );
  }
}

export default reduxForm({
  validate,
  form: 'editForm'
})(connect(null, actions)(EditRental));

const styles = {
  formFooter: {
    background: '#ededed',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '40px'
  },
  save: {
    paddingLeft: '25px',
    float: 'left'
  },
  delete: {
    paddingRight: '25px',
    float: 'right'
  },
  empty: {
    background: '#ffffff',
    height: '200px'
  },
  button: {
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    fontSize: '20px',
    paddingTop: '8px',

    saveButton: {
      color: '#606060'
    },

    deleteButton: {
      color: 'red'
    }
  }
};
