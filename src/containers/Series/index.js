import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
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
        <SeriesList list={this.state.series} />
      </div>
    );
  }
}

export default Series;
