import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Routing
import { Link} from 'react-router-dom';
// UI


// styles
import styled from 'styled-components'
const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
// when a link is clicked, load quiz page - one has actual questions about courses and meal order
// the other is just a question about the dishes being clean
// on click redirect user to quiz
// on quiz submital render quiz-results below, allow updates to quiz and see changes on screen

class SettingQuiz extends Component {
  setQuiz(type){
    console.log("look, i'm clicked: ", type);
  }
  render() {
    return (
      <Main>
        <p>Help setting the table? Never fear! Click one of the options below that suits your needs. </p>
        <p><Link to='/quizzes/fancy'>For when someone who really cares about place settings asks you to set the table.</Link></p>
        <p><a onClick={() => this.setQuiz('whocares')}>For when you give 0 **** </a></p>
      </Main>
    )
  }
}

export default SettingQuiz;
