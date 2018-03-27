import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../shared/utility';

import styled from 'styled-components'
import classes from '../SharedQuizzes.css';

const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  display: flex;
`;
class FancyQuiz extends Component {
  // Input - Checkboxes : drink options - red wine, white wine, champagne
  // Input - Radio : bread
  // Input - Number : how many courses
  // Input - Radio : dessert
  // Input - Radio : serving coffee
  state = {
      quizResult: (<div className={classes.Results}><p>Set your options to see some results</p></div>),
      quizItems: {
        courses: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: '3'
            },
            value: '',
            validation: {
                required: true
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
            valid: false,
            label : "Are you serving coffee or tea?"
          }
        },
        formIsValid: false
      }

      updateResults = ( event ) => {
        event.preventDefault();
        let courses = this.state.quizItems.courses.value;
        let is_bread = this.state.quizItems.bread.value !== "false";
        let is_dessert = this.state.quizItems.dessert.value !== "false";
        let is_coffee = this.state.quizItems.coffee.value !== "false";

        console.log(courses);
        let setting_options = [];
        let setting_type = null;
        let setting_max = Number(courses) > 4 ? true : false; // true if courses > 4
        let setting_error = false; // throw an error if there's no way to show setting
        let two_courses = ['6', '12'];
        let three_courses = ['7', '11'];
        let four_courses = ['13'];
        let dessert = ['18'];
        let coffee = ['19'];
        let bread = ['1'];

        if(Number(courses) === 1) {
          setting_type = "basic";
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
        }
        if(is_dessert){
          setting_options = setting_options.concat(dessert);
        }
        if(is_coffee){
          setting_options = setting_options.concat(coffee);
        }

        console.log("setting options: ", setting_options);


        // pass updated state to redux to decide what to render
        // if courses > 4 flag state
        // if courses === 0 show original state
        // if courses === 1 show basic setting
        // if courses > 1 go through the following:
          // if bread_true option : 1
          // if dessert true option : 18
          // if coffee true option: 19
          // if courses 2 : + options : 6, 12
          // if courses 3 : + options 7, 11
          // if courses 4 and NOT dessert : options 13
          // if courses 4 and IS dessert : no further options

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
                  <Button btnType="BasicBackground" has_background="true" disabled={!this.state.formIsValid}>Enter</Button>
              </form>
          );

        return (
          <Main>
            {form}
            {this.state.quizResult}
          </Main>
        )
      }
}

export default FancyQuiz;
