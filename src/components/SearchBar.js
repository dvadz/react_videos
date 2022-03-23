import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <div>
            <label for='search'>Search Youtube videos</label>
            <input id='search' type='text' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
