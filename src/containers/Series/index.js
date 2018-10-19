import React, { Component } from "react";

class Series extends Component {
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
      <div>
        The length of the series array ={" "}
        <span className="series-length">{this.state.series.length}</span>
      </div>
    );
  }
}

export default Series;
