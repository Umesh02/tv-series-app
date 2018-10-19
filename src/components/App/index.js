import React, { Component } from "react";
import Intro from "../Intro";
import "./App.css";

class App extends Component {
  state = {
    series: []
  };

  componentDidMount() {
    fetch(`http://api.tvmaze.com/search/shows?q=Vikings`)
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most-loved TV series" />
        The length of the series array ={" "}
        <span className="series-length">{this.state.series.length}</span>
      </div>
    );
  }
}

export default App;
