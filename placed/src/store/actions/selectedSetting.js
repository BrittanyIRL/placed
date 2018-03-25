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
  console.log("ACTIONS SETTING: ", setting);
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
