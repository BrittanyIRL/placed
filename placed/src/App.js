import React, { Component } from 'react';
// routing
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// redux & store dependencies
import { connect } from 'react-redux';


// import containers for routing and rendering:
import Layout from './hoc/Layout/Layout';
import PlaceSettings from './containers/PlaceSettings/PlaceSettings';
import SettingQuiz from './containers/SettingQuiz/SettingQuiz';
import FancyQuiz from './containers/SettingQuiz/FancyQuiz/FancyQuiz';
import FunQuiz from './containers/SettingQuiz/FunQuiz/FunQuiz';


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path = "/quiz" component={SettingQuiz} />
        <Route path = "/quizzes/fancy" component={FancyQuiz} />
        <Route path = "/quizzes/fun" component={FunQuiz} />
        <Route path = "/" component={PlaceSettings} />
        <Redirect to="/" />
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
