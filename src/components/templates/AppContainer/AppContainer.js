// Modules
import React from 'react';
import Radium from 'radium';
import Main from '../../rental/Main';
import ModalRoot from '../../modal/ModalRoot';

import { Route, BrowserRouter } from 'react-router-dom';

// Component styles
import styles from './styles';

const AppContainer = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <ModalRoot />
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
        </div>
      </BrowserRouter>
    </div>
  </div>
);

export default Radium(AppContainer);
