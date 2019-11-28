import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  handleSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
