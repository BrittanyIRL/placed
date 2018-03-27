import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Routing
import { Link} from 'react-router-dom';
// UI


// styles
import classes from './SettingQuiz.css';
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
  render() {
    return (
      <Main>
        <h3>Help setting the table? Never fear! Click one of the options below that suits your needs. </h3>
        <ul className={classes.QuizList}>
          <li><Link to='/quizzes/fancy'>For when someone who really cares about place settings asks you to set the table.</Link></li>
          <li><Link to='/quizzes/fun'>For when you give 0 **** </Link></li>
        </ul>
      </Main>
    )
  }
}

export default SettingQuiz;
