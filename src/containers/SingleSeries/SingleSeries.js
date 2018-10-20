import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show);

    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                Name -
              </span>
              {show.name}
            </p>
            <p>
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                Type -
              </span>
              {show.type}, &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                Genres -
              </span>
              {show.genres}
            </p>
            <p>
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                Premiered -
              </span>
              {show.premiered}, &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                Rating -
              </span>
              {show.rating.average}
            </p>
            <p>
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                No. of Episodes -
              </span>
              {show._embedded.episodes.length}
            </p>
            <p>
              <span style={{ color: "#0454f5", fontWeight: "bold" }}>
                Official Site -
              </span>
              {show.officialSite}
            </p>

            <p>
              <img alt="Show" src={show.image.medium} />
            </p>
            <button>
              <Link to={`/`} style={{ color: "white" }}>
                Back to Search
              </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
