import React, { Component } from 'react';
// for ajax requests
import axios from '../../../axios-settings';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

// Components
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Settings from '../../../components/Settings/Settings';
import { updateObject, checkValidity } from '../../../shared/utility';

import styled from 'styled-components'
import classes from './FancyQuiz.css';

const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

class FancyQuiz extends Component {
  // Input - Checkboxes : drink options - red wine, white wine, champagne
  // Input - Radio : bread
  // Input - Number : how many courses
  // Input - Radio : dessert
  // Input - Radio : serving coffee
  state = {
      quizResult: (<p>Set your options to see some results</p>),
      quizExceedsCourses : false,
      quizItems: {
        settingTitle: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'dinner party'
          },
          value: '',
          validation: {
              required: true,
              minLength: 3,
              maxLength: 20,
          },
          valid: false,
          touched: false,
          label : "Give your setting a name"
        },
        courses: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: '3'
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false,
            label : "How many courses are you serving?"
          },
          // drinks: {
          //   elementType: 'checkbox',
          //   elementConfig: {
          //       options: [
          //           {value: "3", displayValue: 'Red Wine', id: 'red_wine', checked : false },
          //           {value: "4", displayValue: 'White Wine', id: 'white_wine', checked : false },
          //           {value: "2", displayValue: 'Water', id: 'water', checked : false },
          //           {value: "5", displayValue: 'Champagne', id: 'champagne', checked : false }
          //       ]
          //   },
          //   name: 'drinks',
          //   value: null,
          //   validation: {},
          //   valid: true,
          //   label : "What drinks will you serve?"
          // },
          bread: {
            elementType: 'radio',
            elementConfig: {
                options: [
                    {value: "true", displayValue: 'Yes', id: 'bread_true'},
                    {value: "false", displayValue: 'No', id: 'bread_false'}
                ]
            },
            name: 'bread',
            value: "true",
            validation: {},
            valid: true,
            label : "Will you serve bread?"
          },
          dessert: {
            elementType: 'radio',
            elementConfig: {
                options: [
                    {value: "true", displayValue: 'Yes', id: 'dessert_true'},
                    {value: "false", displayValue: 'No', id: 'dessert_false'}
                ]
            },
            name: 'dessert',
            value: "false",
            validation: {},
            valid: true,
            label : "Will there be dessert?"
          },
          coffee: {
            elementType: 'radio',
            elementConfig: {
                options: [
                    {value: "true", displayValue: 'Yes', id: 'coffee_true'},
                    {value: "false", displayValue: 'No', id: 'coffee_false'}
                ]
            },
            name: 'coffee',
            value: "false",
            validation: {},
            valid: true,
            label : "Are you serving coffee or tea?"
          }
        },
        formIsValid: false
      }
      componentDidMount(){
        // get setting legend
        this.props.fetchSettingLegend();
        this.props.fetchSettingOrder();
        this.props.fetchSettingTypes();
      }
      updateResults = ( event ) => {
        event.preventDefault();
        let name = this.state.quizItems.settingTitle.value;
        let courses = this.state.quizItems.courses.value;
        let is_bread = this.state.quizItems.bread.value !== "false";
        let is_dessert = this.state.quizItems.dessert.value !== "false";
        let is_coffee = this.state.quizItems.coffee.value !== "false";

        console.log(courses);
        let setting_options = [];
        let remove_options = [];
        let setting_type = "basic";
        let setting_max = Number(courses) > 4 ? true : false; // true if courses > 4
        let setting_error = false; // throw an error if there's no way to show setting
        let two_courses = [6, 12];
        let three_courses = [7, 11];
        let four_courses = [13];
        let dessert = [18];
        let coffee = [19];
        let bread = [1];

        if(Number(courses) === 1) {
          //setting_type = "basic"; // for if we want another setting type to update, but currently basic is also default
        } else if(Number(courses) === 2) {
          setting_options = setting_options.concat(two_courses);
        } else if(Number(courses) === 3) {
          console.log("three!");
          setting_options = setting_options.concat(two_courses, three_courses);
        } else if(Number(courses) >= 4) {
          setting_options = setting_options.concat(two_courses, three_courses, four_courses);
        } else {
          setting_error = true;
        }
        if(is_bread){
          setting_options = setting_options.concat(bread);
        } else {
          remove_options = remove_options.concat(bread);
        }
        if(is_dessert){
          setting_options = setting_options.concat(dessert);
        } else {
          remove_options = remove_options.concat(dessert);
        }
        if(is_coffee){
          setting_options = setting_options.concat(coffee);
        } else {
          remove_options = remove_options.concat(coffee);
        }

        this.props.fetchCustomSetting(setting_type, setting_options, remove_options, name)
        this.setState({quizExceedsCourses : setting_max});
      }
      // todo
      updateCheckbox = (newValue, inputIdentifier) => {
        let existing_values = this.state.quizItems[inputIdentifier].value;
        const options = this.state.quizItems[inputIdentifier].elementConfig.options;
        console.log("CHECKBOX FOUND ")
        let updatedCheckbox = null;
        let updatedValue = [];
        for (let key in options) {
          if(options[key].value === newValue){
            let is_true = options[key].checked === "false" ? true : false;
            updatedCheckbox = updateObject(this.state.quizItems[inputIdentifier].elementConfig.options[key], {
              checked : !is_true ? "true" : "false"
            })
            if(is_true){
              updatedValue.push(options[key].value);
            }
          }
          console.log(options[key].checked);
          if(options[key].checked === "true"){
            updatedValue.push(options[key].value);
          }
        }
        return updatedValue;
      }

      inputChangedHandler = (event, inputIdentifier) => {
        let this_input_value = event.target.value;
        let input_type = this.state.quizItems[inputIdentifier].elementType;
        let updatedFormElement = null;
        let updateQuizResults = null;
        if (input_type === 'checkbox') {
          let updatedValue = this.updateCheckbox(this_input_value, inputIdentifier);
          updatedFormElement = updateObject(this.state.quizItems[inputIdentifier], {
            value : updatedValue,
            valid : true,
            touched : true
          });
        } else {
          updatedFormElement = updateObject(this.state.quizItems[inputIdentifier], {
            value : this_input_value,
            valid : checkValidity(this_input_value, this.state.quizItems[inputIdentifier].validation),
            touched : true
          });
        }

        updateQuizResults = updateObject(this.state.quizItems, {
          [inputIdentifier] : updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updateQuizResults) {
            formIsValid = updateQuizResults[inputIdentifier].valid && formIsValid;
        }
        this.setState({quizItems: updateQuizResults, formIsValid: formIsValid});
      }

      render() {
        const formElementsArray = [];
          for (let key in this.state.quizItems) {
              formElementsArray.push({
                  id: key,
                  config: this.state.quizItems[key]
              });
          }
          let form = (
            <form onSubmit={this.updateResults} className={classes.Quiz}>
              {formElementsArray.map(formElement => (
                <div key={formElement.id}>
                  <label>{formElement.config.label}</label>
                  <Input
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                </div>
              ))}
              <div>
              <Button btnType="BasicBackground" has_background="true" disabled={!this.state.formIsValid}>Enter</Button>
              </div>
            </form>
          );

        let current_setting = this.state.quizResult;
        if (this.props.current_error) {
          current_setting = (<p>this.props.current_error_message + this.props.current_error_title</p>);
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
          <Main>
            <h2>Get some help building a place setting</h2>
            {form}
            <div className={classes.Results}>{current_setting}
            {this.state.quizExceedsCourses ? "Anything after the first 4 settings doesn't get a place setting at the start of the meal." : null}
            </div>
          </Main>
        )
      }
}

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
    fetchCustomSetting: (setting, add_items, remove_items, name) => dispatch(actions.fetchCustomSetting(setting, add_items, remove_items, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FancyQuiz);
