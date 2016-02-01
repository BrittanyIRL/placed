//React components go here

var PlacedApp = React.createClass({
  render: function() {
    return (
      <div className="row">
        <PlaceSetting></PlaceSetting>      
      </div>

    );
  }
});

var PlaceSetting = React.createClass({
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