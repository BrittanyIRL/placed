/**
@class Layout
higher order component that will allow to track auth and route to allow different nav in the toolbar (if desired)
@returns props.children with toolbar
**/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
// import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render () {
    return (
      <Aux>
          <Toolbar />
          <main>
              {this.props.children}
          </main>
      </Aux>
    )
  }
}


export default Layout;
