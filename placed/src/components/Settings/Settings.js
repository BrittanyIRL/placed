import React from 'react';

import Setting from './Setting/Setting';
import classes from './Settings.css';

const settings = ( props ) => {
  console.log("settings component props: ", props);
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
    <div className={classes.ContainerSettings}>
      <h2 className={classes.SettingsHeading}>{props.title}</h2>
      <div className={classes.TopSettings}>
        {top_settings.map( item => (
          <Setting
            key={item}
            id={"item_" + item}
            title={props.legend[item]}
            />
        ))}
      </div>
      <div className={classes.BottomSettings}>
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
