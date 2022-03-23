import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor='search'>Search Youtube videos</label>
            <input id='search' type='text' onChange={this.onInputChange} value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
