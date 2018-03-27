import * as actionTypes from './actionTypes';
import axios from '../../axios-settings';

const getSelectedSettingSuccess = (setting, data) => {
  let setting_data = { title : setting, items : data };
  return {
    type: actionTypes.GET_SELECTED_SETTING_SUCCESS,
    current_setting : setting_data
  }
}
const getSelectedSettingError = (setting, error) => {
  return {
    type: actionTypes.GET_SELECTED_SETTING_FAIL,
    error : { title : setting, message : "error retrieving data for "}
  }
}

export const fetchSelectedSetting = (setting) => {
  return dispatch => {
    axios.get( `https://placed-248bb.firebaseio.com/place-types/${setting}/options.json` )
      .then( response => {
        dispatch(getSelectedSettingSuccess(setting, response.data))
      })
      .catch( error => {
        console.log("error: ", error);
        dispatch(getSelectedSettingError(setting, error))
      });
  }
}

const editCustomSettingSuccess = (data, add, remove, name) => {
  let custom_items = data.concat(add);
  custom_items = custom_items.filter(item => remove.indexOf(item) === -1);
  let setting_data = { title : name, items : custom_items };
  return {
    type: actionTypes.GET_CUSTOM_SETTING_SUCCESS,
    current_setting : setting_data
  }
}
export const fetchCustomSetting = (setting, add_items, remove_items, name) => {
  return dispatch => {
    axios.get( `https://placed-248bb.firebaseio.com/place-types/${setting}/options.json` )
      .then( response => {
        dispatch(editCustomSettingSuccess(response.data, add_items, remove_items, name));
      })
      .catch( error => {
        console.log("error: ", error);
        dispatch(getSelectedSettingError(setting, error))
      });
  }
}
