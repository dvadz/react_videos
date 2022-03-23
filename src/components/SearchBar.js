import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <div>
            <label for='search'>Search Youtube videos</label>
            <input id='search' type='text' onChange={this.onInputChange} value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
