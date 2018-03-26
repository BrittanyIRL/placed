import React, { Component } from 'react';

class FunQuiz extends Component {
  state = {
    dishes: {
      clean : null,
      enough : null
    }
  }
  // if dishes are clean and there's enough for everyone: great, you're done.
  // if dishes are not clean, use frisbees
  // if dishes are not clean and there are not enough, bring your own frisbee
  // if dishes are clean but there's not enough, consider a dish-free sandwich or get takeout

  render() {
    return (
      <div> fun quiz here </div>
    )
  }
}

export default FunQuiz;
