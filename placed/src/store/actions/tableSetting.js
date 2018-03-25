import * as actionTypes from './actionTypes';
import axios from '../../axios-settings';

// shared fail
export const getSettingsError  = (failed_section, error) => {
    return {
      type: actionTypes.GET_SETTINGS_FAIL,
      error : { title : failed_section, message : "Couldn't access data"}
    }
}

export const setLegend = ( legend_data ) => {
  return {
    type: actionTypes.GET_SETTING_LEGEND_SUCCESS,
    setting_legend : legend_data
  }
}

export const fetchSettingLegend = () => {
  return dispatch => {
    axios.get( 'https://placed-248bb.firebaseio.com/settings.json' )
      .then( response => {
        dispatch(setLegend(response.data));
      })
      .catch( error => {
        // and error dispatch
        console.log("error: ", error);
        dispatch(getSettingsError("legend", error))

      });
  }
}

export const setOrder = ( order_data ) => {
  return {
    type: actionTypes.GET_SETTING_ORDER_SUCCESS,
    setting_order : order_data
  }
}

export const fetchSettingOrder = () => {
  return dispatch => {
    axios.get( 'https://placed-248bb.firebaseio.com/order.json' )
      .then( response => {
        dispatch(setOrder(response.data));
      })
      .catch( error => {
        console.log("error: ", error)
        dispatch(getSettingsError("order", error));
      });
    }
}

const setSettingTypes = (setting_data) => {
  let options = [];
  for (let i in setting_data) {
    options.push(setting_data[i].title);
  }
  return {
    type: actionTypes.GET_SETTING_TYPES_SUCCESS,
    setting_types : options
  }
}

export const fetchSettingTypes = () => {
  return dispatch => {
    axios.get( 'https://placed-248bb.firebaseio.com/place-types.json' )
      .then( response => {
        dispatch(setSettingTypes(response.data));
      })
      .catch( error => {
        dispatch(getSettingsError("types", error))
        console.log("error: ", error)
      });
  }
}
