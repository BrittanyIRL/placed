import React from 'react';

import classes from './Setting.css';

const setting = (props) => (
  <span className={[classes.Setting, classes[props.id]].join(' ')} key={props.item} alt-text={props.title}></span>
);

export default setting;
