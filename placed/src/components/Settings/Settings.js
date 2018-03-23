import React from 'react';

import Setting from './Setting/Setting';
// import classes from './settings.css';

const settings = ( props ) => {
  let top_sort = props.order.top; //reference only
  let bottom_sort = props.order.bottom; // reference only
  // prepare sort of settings, use this to render contents in the proper order
  let top_settings = top_sort.filter( item => {
     return props.items.indexOf(item) >= 0 ? item : false;
  });

  let bottom_settings = bottom_sort.filter( item => {
    return props.items.indexOf(item) >= 0 ? item : false;
  });

  return (
    <div>
      <h2>{props.title}</h2>
      <p>some text</p>
      <div>
        {top_settings.map( item => (
          <Setting
            key={item}
            id={"item_" + item}
            title={props.legend[item]}
            />
        ))}
      </div>
      <div>
        {bottom_settings.map( item => (
          <Setting
            key={item}
            id={"item_" + item}
            title={props.legend[item]}
            />
        ))}
      </div>
    </div>
  );
};

export default settings;
