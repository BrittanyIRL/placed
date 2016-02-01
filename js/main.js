var ProductCategoryRow = React.createClass({
  render: function() {
    return (<p>{this.props.category}</p>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.basic ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
        <li>{name}</li>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var settingToShow = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      //this filters 'product' aka 'settings'
      if (product.basic && this.props.basicOnly) {
        return;
      }
      if (product.category !== lastCategory) {
        settingToShow.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      settingToShow.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <div>
      <ul>
        {settingToShow}
      </ul>
      </div>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.basicOnlyInput.checked
    );
  },
  render: function() {
    return (
      <form>
        <p>
          <input
            type="radio"
            checked={this.props.basicOnly}
            ref="basicOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only basic setting
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      basicOnly: true
    };
  },

  handleUserInput: function(basicOnly) {
    this.setState({
      basicOnly: basicOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          basicOnly={this.state.basicOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          basicOnly={this.state.basicOnly}
        />
      </div>
    );
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



ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('reactApp'));