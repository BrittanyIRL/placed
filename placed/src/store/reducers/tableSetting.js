import * as actionTypes from '../actions/actionTypes';

const initialState = {
  setting_legend : null,
  setting_order : null,
  setting_types : null,
  error : false
}

// where action is the result.data of axios request to firebase for setting legend - result.data
const getSettingLegend = (state, action) => {
  return {
    ...state,
    setting_legend : action.setting_legend
  }
}
const getSettingOrder = (state, action) => {
  return {
    ...state,
    setting_order : action.setting_order
  }
}

const getSettingTypes = ( state, action ) => {
  return {
    ...state,
    setting_types : action.setting_types
  }
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case actionTypes.GET_SETTING_LEGEND: return getSettingLegend( state, action );
    case actionTypes.GET_SETTING_ORDER: return getSettingOrder( state, action );
    case actionTypes.GET_SETTING_TYPES: return getSettingTypes( state, action );
    default: return state
  }
}

export default reducer;
