import React, { Component } from "react";
import SeriesList from "../../components/SeriesList/SeriesList";
import Loader from "../../components/Loader/Loader";
import Intro from "../../components/Intro/Intro";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };
  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <Intro message="Here you can find all of your most-loved TV series" />
        <div>
          <input
            autoFocus={true}
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>

        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() === "" && (
            <p>Please enter series name into the input box</p>
          )}

        {!isFetching &&
          series.length === 0 &&
          seriesName.trim() !== "" && <p>No TV series found with this name</p>}

        {isFetching && <Loader />}

        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
