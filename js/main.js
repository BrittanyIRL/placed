var ProductCategoryRow = React.createClass({
  render: function() {
    return (<p>{this.props.category}</p>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
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
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      //this filters 'product' aka 'settings'
      if (!product.stocked && this.props.inStockOnly) {
        return;
      }
      //this makes new categories, can delete after testing
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <div>
      <ul>
        {rows}
      </ul>
      </div>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    return (
      <form>
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      inStockOnly: true
    };
  },

  handleUserInput: function(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          inStockOnly={this.state.inStockOnly}
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