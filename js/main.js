//What you actually see... 
//*************************

var View = React.createClass({
  render: function(){
    //fill this once radio is working
    return(
      <div>

      <RadioButtons options={buttons}
        onUserInput={this.handleUserInput}
        />
      <Basic />
      <Informal />
      </div>
    );
  }
})

//RADIO BUTTONS TO SELECT CONTENT 
var buttons = [
  {value: true, name: "Basic"},
   {value: false, name: "Informal"},
  {value: false, name: "Formal"}
];

var addActive = React.createClass({
  //attach active 'visible' class and transfer down the ladder
  //base it on button value 
})
var RadioButtons = React.createClass({
  getInitialState: function () {
    // Assuming there is always one option set to true.
    return {
      buttons: this.props.options.filter(function (option) {
        return option.value;

      })[0].name
    };
  },
  onRadioChange: function (e) {
    this.setState({
      buttons: e.target.value
    });
  },
  render: function () {
    var options = this.props.options.map(function (option, key) {
      return (
        <li key={key}>
          <input type="radio" 
             name="question" 
             onChange={this.onRadioChange} 
             checked={this.state.buttons === option.name}
             value={option.name} /> {option.name}
        </li>
      );
    }, this);
    return (
      <div className="row">
        <div className="col-md-4">
        <ul style={{listStyle: 'none'}}>
          {options}
        </ul>
      </div>
    </div>
    );
  }
});

//CONTENTS TO DISPLAY
// ********************************
//BASIC
var Basic = React.createClass({
  render: function(){
    //fill this once radio is working
    return(<p>Basic setting goes here</p>);
  }
});
//INFORMAL
var Informal = React.createClass({
  render: function(){
    //fill this once radio is working
    return(<p>Informal setting goes here</p>);
  }
});

//FORMAL 
var Formal = React.createClass({
  render: function(){
    //fill this once radio is working
    return(<p>Formal setting goes here</p>);
  }
});

// place setting json to pull and filter data from, 
// after this works it should be consolidated 
// so that things are not duplicated
var PRODUCTS = [
  {category: 'LC', name: 'Napkin', stocked: false, basic: true},
  {category: 'LC', name: 'Fork', stocked: false, basic: true},
  {category: 'CC', name: 'Plate', stocked: false, basic: true},
  {category: 'RC', name: 'Knife', stocked: false, basic: true},
  {category: 'RC', name: 'Spoon', stocked: false, basic: true}
  // {category: 'Informal', name: 'Napkin'},
  // {category: 'Informal', name: 'Fork'},
  // {category: 'Informal', name: 'Fork'},
  // {category: 'Informal', name: 'Plate'},
  // {category: 'Informal', name: 'Knife'},
  // {category: 'Informal', name: 'Spoon'},
  // {category: 'Informal', name: 'Spoon'}
];

//Default Basic Setting 
  //option set 1 : basic, informal, formal setting base

// Questions from there ...
//option set 2 : for basic: 
  // bread and butter setting
  // wine
//option set 2 : for informal
  // bread and butter
  // wine 
  // coffee
  // dessert 
  // salad
  // cloth napkin (instead of paper)
//option set 2 : for formal
  // bread and butter
  // wine 
  // cloth napkin (instead of paper)
  // Oysters 



ReactDOM.render(<View />, document.getElementById('reactApp'));