//React components go here

var PlacedApp = React.createClass({
  
  render: function() {
    return (
      <div className="Container">
        <BasicSetting></BasicSetting>
        <InformalSetting></InformalSetting>
        <FormalSetting></FormalSetting>
        <PlaceSetting></PlaceSetting>
         <select value="B">
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select> 
        <LikeButton></LikeButton>
      </div>


    );
  }
});

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});


//various items to show up depending on basic, informal, or formal

//CENTER ROW OPTIONS 
var Napkin = React.createClass({
  //paper napkin, default
  render: function(){
    return (
      <div className="flexi">
        <p>Napkin</p>
      </div>
    );
  }
});

var Fork = React.createClass({
  //basic
  render: function(){
    return (
      <div className="flexi">
        <p>Fork</p>
      </div>
    );
  }
});

var Plate = React.createClass({
  //basic
  render: function(){
    return (
      <div className="flexi">
        <p>Plate</p>
      </div>
    );
  }
});
var Knife = React.createClass({
  //basic
  render: function(){
    return (
      <div className="flexi">
        <p>Knife</p>
      </div>
    );
  }
});

var Spoon = React.createClass({
  //basic
  render: function(){
    return (
      <div className="flexi">
        <p>Spoon</p>
      </div>
    );
  }
});

//Formal Only
var Charger = React.createClass({
  //basic
  render: function(){
    return (
      <div className="flexi">
        <p>Charger</p>
      </div>
    );
  }
});



var BasicSetting = React.createClass({
  render: function(){
    return (
        <div>
          <Napkin></Napkin>
          <Fork></Fork>
          <Plate></Plate>
          <Knife></Knife>
          <Spoon></Spoon> 
        </div>        
      )
  }
})

var InformalSetting = React.createClass({
  render: function(){
    return (
        <div>
          <Napkin></Napkin>
          <Fork></Fork>
          <Fork></Fork>
          <Plate></Plate>
          <Knife></Knife>
          <Spoon></Spoon>
          <Spoon></Spoon> 
        </div>        
      )
  }
});

var FormalSetting = React.createClass({
  render: function(){
    return (
        <div>
          <Napkin></Napkin>
          <Fork></Fork>
          <Fork></Fork>
          <Fork></Fork>
          <Charger></Charger>
          <Knife></Knife>
          <Fork></Fork>
          <Spoon></Spoon> 
        </div>        
      )
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
var pickSetting = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event){
    this.setState({
      value: event.target.value});
  },
  render: function(){
    var settingType = this.state.value;
    return <input type="text" value ={value} onChange={this.handleChange} />;
  }
});


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