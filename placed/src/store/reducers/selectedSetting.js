import * as actionTypes from '../actions/actionTypes';


const initialState = {
  current_setting_title : null,
  current_setting_items : null,
  error : false,
  error_message : null,
  error_for : null
}

const getCurrentSettingSuccess = (state, action ) => {
  return {
    ...state,
    current_setting_title : action.current_setting.title,
    current_setting_items : action.current_setting.items,
    error: false,
    error_message : null,
    error_for : null
  }
};
const getCurrentSettingFail = (state, action ) => {
  console.log("FAIL ACTION : ", action);
  // leave existing state so that it can coexist still?
  return {
    ...state,
    error: true,
    error_message : action.error.message,
    error_for : action.error.title
  }
};
const getCustomSettingSuccess = (state, action ) => {
  return {
    ...state,
    current_setting_title : action.current_setting.title,
    current_setting_items : action.current_setting.items,
    error: false,
    error_message : null,
    error_for : null
  }
};

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case actionTypes.GET_SELECTED_SETTING_SUCCESS: return getCurrentSettingSuccess(state, action);
    case actionTypes.GET_SELECTED_SETTING_FAIL: return getCurrentSettingFail(state, action);
    case actionTypes.GET_CUSTOM_SETTING_SUCCESS: return getCustomSettingSuccess(state, action);
    default: return state;
  }
}

export default reducer;
