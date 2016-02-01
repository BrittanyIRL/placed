//React components go here

var PlacedApp = React.createClass({
  render: function() {
    return (
      <div className="row">
        <PlaceSetting></PlaceSetting> 
      </div>
      <div className="row">
        <Napkin></Napkin>
        <Fork></Fork>
        <Plate></Plate>
        <Knife></Knife>
        <Spoon></Spoon>    
      </div>

    );
  }
});


//various items to show up depending on basic, informal, or formal
var Napkin = React.createClass({
  //basic
  render: function(){
    return (
      <div className="col-md-2">
        <p>Napkin</p>
      </div>
    );
  }
});

var Fork = React.createClass({
  //basic
  render: function(){
    return (
      <div className="col-md-2">
        <p>Fork</p>
      </div>
    );
  }
});

var Plate = React.createClass({
  //basic
  render: function(){
    return (
      <div className="col-md-4">
        <p>Plate</p>
      </div>
    );
  }
});
var Knife = React.createClass({
  //basic
  render: function(){
    return (
      <div className="col-md-2">
        <p>Knife</p>
      </div>
    );
  }
});

var Spoon = React.createClass({
  //basic
  render: function(){
    return (
      <div className="col-md-2">
        <p>spoon</p>
      </div>
    );
  }
});


//to be the three base options, 
var PlaceSetting = React.createClass({
  // basic setting

  render: function() {
      return (
        <div>
          <h2>Successfully inside the basic variable </h2>
        </div>
        
        );
    }
});


//Radio button if thens 

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



ReactDOM.render(<PlacedApp />, document.getElementById('reactApp'));