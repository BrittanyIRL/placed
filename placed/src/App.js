import React, { Component } from 'react';
// routing
import { Route, Switch, withRouter } from 'react-router-dom';
// redux & store dependencies
import { connect } from 'react-redux';
// base styles for app
import './App.css';

// import containers for routing and rendering:
import Layout from './hoc/Layout/Layout';
import PlaceSettings from './containers/PlaceSettings/PlaceSettings';


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path = "/" component={PlaceSettings} />
      </Switch>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default withRouter(connect(null, null)(App));
