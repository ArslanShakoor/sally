// Modal root is helping us in mounting and unmounting model.
// We can scale our apps with multiple models
import React from 'react';
import { connect } from 'react-redux';

import EditRental from '../rental/EditRental';

import { MODAL_TYPE_EDIT_RENTAL } from './types';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_EDIT_RENTAL]: EditRental
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);
