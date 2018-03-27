import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../shared/utility';

// images
import plateImage from '../../../assets/images/standard_plate.png';
import takeOutImage from '../../../assets/images/take_out.png';
import frisbeeImage from '../../../assets/images/frisbee.png';
import soapImage from '../../../assets/images/soap.png';

// styles
import styled from 'styled-components'
import classes from './FunQuiz.css';

const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

class FunQuiz extends Component {
  state = {
      quizResult: (<div className={classes.Results}><p>Set your options to see some results</p></div>),
      quizItems: {
          clean: {
            elementType: 'radio',
            elementConfig: {
                options: [
                    {value: "true", displayValue: 'Yup', id: 'clean_true'},
                    {value: "false", displayValue: 'Nah.', id: 'clean_false'}
                ]
            },
            name: 'clean',
            value: "true",
            validation: {},
            valid: true,
            label : "Are your dishes are clean?"
          },
          quantity: {
            elementType: 'radio',
            elementConfig: {
                options: [
                    {value: "true", displayValue: 'Yup', id: 'quantity_true'},
                    {value: "false", displayValue: 'Nah.', id: 'quantity_false'}
                ]
            },
            name: 'quantity',
            value: "false",
            validation: {},
            valid: true,
            label : "Do you have enough dishes for everyone?"
          }
        },
        formIsValid: true
    }


  // if dishes are clean and there's enough for everyone: great, you're done.
  // if dishes are not clean, use frisbees
  // if dishes are not clean and there are not enough, bring your own frisbee
  // if dishes are clean but there's not enough, consider a dish-free sandwich or get takeout
  updateResults = ( event ) => {
    event.preventDefault();
    let is_clean = this.state.quizItems.clean.value === "true";
    let is_quantity = this.state.quizItems.quantity.value === "true";
    let display_result = null;
    if (is_clean && is_quantity){
      display_result = (<div className={classes.Results}>
        <p>You're in the clear, don't worry about it</p>
        <img src={plateImage} />
      </div>);
    } else if (is_clean && !is_quantity){
      display_result = (<div className={classes.Results}>
        <p>What about some takeout?</p>
        <img src={takeOutImage} />
      </div>);
    } else if (!is_clean && is_quantity){
      display_result = (<div className={classes.Results}>
        <p>Why not wash them plates?</p>
        <img src={soapImage} />
      </div>);
    } else if (!is_clean && !is_quantity){
      display_result = (<div className={classes.Results}>
        <p>Have you considered frisbees?</p>
        <img src={frisbeeImage} />
      </div>);
    } else {
      display_result = (<div className={classes.Results}><p>Set your options to see some results</p></div>);
    }
    this.setState({ quizResult : display_result });
  }

  inputChangedHandler = (event, inputIdentifier) => {
    console.log("input change! ", event, inputIdentifier);
    const updatedFormElement = updateObject(this.state.quizItems[inputIdentifier], {
      value : event.target.value,
      valid : checkValidity(event.target.value, this.state.quizItems[inputIdentifier].validation),
      touched : true
    });
    console.log("updated form: ", updatedFormElement);

    const updateQuizResults = updateObject(this.state.quizItems, {
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
        <h2 className={classes.FormHeading}>Proper place settings are for the birds</h2>
        {form}
        {this.state.quizResult}
      </Main>
    )
  }
}

export default FunQuiz;
