import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from "history";
import Chat from './chat/chat';

export const history = createBrowserHistory()

class App extends Component {

  render() {
    return (
      <div>
        <Router history={history}>
          <Route path={'/'} component={Chat} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
