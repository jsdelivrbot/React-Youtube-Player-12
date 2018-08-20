import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render(){
    return(
      <div className="search-bar form-group col-md-12">
        <input
          className="form-control col-md-4"
          placeholder="search youtube..."
          onChange = { event => this.onSearch(event.target.value) }
          value = {this.state.term}
        />
      </div>
    );
  };
  onSearch(term){
    this.setState({term});
    this.props.onSearch(term);
  }
}

export default SearchBar;
