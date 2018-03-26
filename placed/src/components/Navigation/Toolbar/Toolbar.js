import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={classes.ToolbarHeader}>
      <nav className={classes.ToolbarNav}>
          <NavigationItems />
      </nav>
    </header>
);

export default toolbar;
