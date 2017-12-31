// Modal is higher order component This will help us to render all Modals
import React, { Component } from 'react';
import styled from 'styled-components';
import capitalizeFirstLetter from '../utils/common_methods/capitalizeFirstLetter';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.65);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 4px;
  cursor: pointer;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: '';
  }
`;

const Dialog = styled.div`
  position: relative;
  outline: 0;
  width: 100%;
  background: white;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 520px;
  cursor: default;
`;

const Body = styled.div`
  padding-bottom: 16px;
`;

export default class Modal extends Component {
  listenKeyboard = event => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }

  title = () => {
    const title = this.props.title;
    const status = this.props.status;
    return (
      <div>
        <div style={styles.headerTitle}>{capitalizeFirstLetter(title)}</div>
        <div style={styles.headerStatus}>{capitalizeFirstLetter(status)}</div>
      </div>
    );
  };

  onOverlayClick = () => {
    this.props.onClose();
  };

  onDialogClick = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <div className="modal">
        <Overlay />
        <Content onClick={this.onOverlayClick}>
          <Dialog onClick={this.onDialogClick}>
            <div
              style={{
                ...styles.status[capitalizeFirstLetter(this.props.status)],
                ...styles.header
              }}
            >
              {this.title()}
            </div>
            <Body>{this.props.children}</Body>
          </Dialog>
        </Content>
      </div>
    );
  }
}

const styles = {
  header: {
    padding: '16px 8px 8px 8px',
    textAlign: 'left',
    paddingLeft: '25px'
  },
  status: {
    Reserved: {
      background: '#990000'
    },
    Active: {
      background: '#f59514'
    },
    Returned: {
      background: '#CD96CD'
    },
    Archived: {
      background: '#000000'
    }
  },
  headerTitle: {
    fontSize: '40px',
    color: '#ffffff'
  },
  headerStatus: {
    fontSize: '18px',
    color: '#ffffff'
  }
};
