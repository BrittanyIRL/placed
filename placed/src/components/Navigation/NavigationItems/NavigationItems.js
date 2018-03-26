/**
@todo make this a dynamic list
**/
import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavList}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/quiz" exact>Quizzes</NavigationItem>
    </ul>
);

export default navigationItems;
