var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
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
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
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
      filterText: '',
      inStockOnly: true
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
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
  {category: 'Basic', name: 'Napkin', stocked: false},
  {category: 'Basic', name: 'Fork', stocked: false},
  {category: 'Basic', name: 'Plate', stocked: false},
  {category: 'Basic', name: 'Knife', stocked: false},
  {category: 'Basic', name: 'Spoon', stocked: false}
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