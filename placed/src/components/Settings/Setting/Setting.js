import React from 'react';

const setting = (props) => (
  <span key={props.item} id={props.item_id}>{props.title}</span>
);

export default setting;
