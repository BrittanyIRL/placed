import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={classes.ToolbarHeader}>
      <h1>Places, Everyone!</h1>
      <nav className={classes.ToolbarNav}>
          <NavigationItems />
      </nav>
    </header>
);

export default toolbar;
