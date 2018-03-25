import * as actionTypes from '../actions/actionTypes';

const initialState = {
  setting_legend : null,
  setting_order : null,
  setting_types : null,
  error : false,
  error_message : null,
  error_for : null
}

// where action is the result.data of axios request to firebase for setting legend - result.data
const getSettingLegendSuccess = (state, action) => {
  return {
    ...state,
    setting_legend : action.setting_legend,
    error: false,
    error_message : null,
    error_for : null
  }
}
const getSettingOrderSuccess = (state, action) => {
  return {
    ...state,
    setting_order : action.setting_order,
    error: false,
    error_message : null,
    error_for : null
  }
}

const getSettingTypesSuccess = ( state, action ) => {
  return {
    ...state,
    setting_types : action.setting_types,
    error: false,
    error_message : null,
    error_for : null
  }
}

const getSettingsFail = (state, action ) => {
  return {
    ...state,
    error: true,
    error_message : action.error.message,
    error_for : action.error.title
  }
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case actionTypes.GET_SETTING_LEGEND_SUCCESS: return getSettingLegendSuccess( state, action );
    case actionTypes.GET_SETTING_ORDER_SUCCESS: return getSettingOrderSuccess( state, action );
    case actionTypes.GET_SETTING_TYPES_SUCCESS: return getSettingTypesSuccess( state, action );
    case actionTypes.GET_SETTINGS_FAIL: return getSettingsFail( state, action);
    default: return state
  }
}

export default reducer;
