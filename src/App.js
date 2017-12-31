// Modules
import React, { Component } from 'react';

// Components
import { AppContainer } from './components/templates/AppContainer';

// Styling
import { StyleRoot, Style } from 'radium';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Default styles
import baseStyle from './styles/styles';

/**
 * @description Application component
 * @extends Component
 */
class App extends Component {
  /**
   * @description :: Component rendering
   * @return {Object}
   */
  render() {
    return (
      <StyleRoot>
        <Style rules={baseStyle} />
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <AppContainer />
        </MuiThemeProvider>
      </StyleRoot>
    );
  }
}

export default App;
