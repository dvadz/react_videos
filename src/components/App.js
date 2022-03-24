import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='app ui container'>
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
