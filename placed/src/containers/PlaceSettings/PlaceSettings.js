import React, { Component } from 'react';
import axios from '../../axios-settings';

import Button from '../../components/UI/Button/Button';
import Settings from '../../components/Settings/Settings';

class PlaceSettings extends Component {
  state = {
    setting_legend: null,
    setting_order: null,
    setting_types: null,
    current_setting: null,
    error: false
  }
  componentDidMount(){
    // grab data
    axios.get( 'https://placed-248bb.firebaseio.com/place-types.json' )
      .then( response => {
        console.log("response", response.data);
        let options = [];
        for (let i in response.data) {
          options.push(response.data[i].title);
        }
        console.log(options);
        this.setState({setting_types: options})
      })
      .catch( error => {
        console.log("error: ", error)
      });

      axios.get( 'https://placed-248bb.firebaseio.com/settings.json' )
        .then( response => {
          console.log("response", response.data);
          this.setState({setting_legend: response.data})
        })
        .catch( error => {
          console.log("error: ", error)
        });
      axios.get( 'https://placed-248bb.firebaseio.com/order.json' )
        .then( response => {
          console.log("response", response.data);
          this.setState({setting_order: response.data})
        })
        .catch( error => {
          console.log("error: ", error)
        });
  }
  componentWillReceiveprops( nextProps ){
    console.log("component will receive props: ", nextProps);
  }
  /**
  component should update if state or props has been updated.
  **/
  shouldComponentUpdate( nextProps, nextState ){
    console.log("should component update: ", nextProps, nextState);
    if(this.state !== nextState){
      return true;
    }
    return false;

  }
  componentWillUpdate( nextProps, nextState ){
    console.log("component will update: ", nextProps, nextState);
  }
  componentDidUpdate(){
    console.log("component did update");
  }



  updateSetting = (setting) => {
    axios.get( `https://placed-248bb.firebaseio.com/place-types/${setting}/options.json` )
      .then( response => {
        let setting_data = { title : setting, items : response.data };
        this.setState({current_setting: setting_data});
      })
      .catch( error => {
        console.log("error: ", error);
        this.setState({error: error });
      });
  }

  render() {
    let settings = null;
    let current_setting = this.state.current_setting;
    if (this.state.setting_types) {
      settings = this.state.setting_types.map( setting => {
        return (
          <Button
          key={setting}
          clicked={() => this.updateSetting(setting)}
          btnType="Success">
          {setting}</Button>
        )
      });
    }
    return (
      <div>
      {settings}
      {this.state.current_setting ? <Settings
        items={this.state.current_setting.items}
        legend={this.state.setting_legend}
        order={this.state.setting_order}
        title={this.state.current_setting.title}
        /> : 'nothing to display, click an option'}
      </div>
    );
  };
};


export default PlaceSettings;
