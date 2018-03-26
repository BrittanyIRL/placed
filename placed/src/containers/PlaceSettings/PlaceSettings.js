import React, { Component } from 'react';
// for ajax requests
import axios from '../../axios-settings';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// UI
import Button from '../../components/UI/Button/Button';
import Settings from '../../components/Settings/Settings';

// styles
import styled from 'styled-components'
import classes from './PlaceSettings.css';

class PlaceSettings extends Component {
  state = {
    error: false
  }
  componentDidMount(){
    // get setting legend
    this.props.fetchSettingLegend();
    this.props.fetchSettingOrder();
    this.props.fetchSettingTypes();
  }
  componentWillReceiveProps( nextProps ){
    // console.log("component will receive props: ", nextProps);
  }
  /**
  component should update if state or props has been updated.
  **/
  shouldComponentUpdate( nextProps, nextState ){
    if (this.props.current_error_title !== nextProps.current_error_title){
      return true;
    } else if (this.props.settings_error_title !== nextProps.settings_error_title){
      return true;
    } else if (this.props.setting_order !== nextProps.setting_order){
      return true;
    } else if (this.props.setting_legend !== nextProps.setting_legend){
      return true;
    } else if (this.props.setting_types !== nextProps.setting_types){
      return true;
    } else if (this.props.current_setting_title !== nextProps.current_setting_title){
      return true;
    }
    console.log("no update to component");
    return false;

  }

  render() {
    let setting_buttons = null;
    if (this.props.settings_error) {
      setting_buttons = (<p className={[classes.Error]}>{this.props.settings_error_message}</p>);
    } else {
      if (this.props.setting_types) {
        setting_buttons = this.props.setting_types.map( setting => {
          return (
            <Button
            key={setting}
            clicked={() => this.props.fetchSelectedSetting(setting)}
            btnType="Success">
            {setting}</Button>
          )
        });
      }
    }

    let current_setting = 'nothing to display, click an option';
    if (this.props.current_error) {
      current_setting = this.props.current_error_message + this.props.current_error_title;
    } else {
      if (this.props.current_setting_title) {
        current_setting = (
          <Settings
            items={this.props.current_setting_items}
            legend={this.props.setting_legend}
            order={this.props.setting_order}
            title={this.props.current_setting_title}
            />
        )
      }
    }

    return (
      <main>
      <div className={[classes.ButtonContainer]}>{setting_buttons}</div>
      <div className={[classes.DisplaySetting]}>{current_setting}</div>
      </main>
    );
  };
};

const mapStateToProps = state => {
  return {
    setting_legend : state.tableSetting.setting_legend,
    setting_order : state.tableSetting.setting_order,
    setting_types : state.tableSetting.setting_types,
    current_setting_items : state.selectedSetting.current_setting_items,
    current_setting_title : state.selectedSetting.current_setting_title,
    settings_error : state.tableSetting.error,
    settings_error_message : state.tableSetting.error_message,
    settings_error_title : state.tableSetting.error_for,
    current_error : state.selectedSetting.error,
    current_error_message : state.selectedSetting.error_message,
    current_error_title : state.selectedSetting.error_for
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSettingLegend: () => dispatch(actions.fetchSettingLegend()),
    fetchSettingOrder: () => dispatch(actions.fetchSettingOrder()),
    fetchSettingTypes: () => dispatch(actions.fetchSettingTypes()),
    fetchSelectedSetting: (setting) => dispatch(actions.fetchSelectedSetting(setting))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceSettings);
