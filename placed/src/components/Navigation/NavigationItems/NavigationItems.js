/**
@todo make this a dynamic list
**/
import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem link="/" exact>Home</NavigationItem>
    </ul>
);

export default navigationItems;
