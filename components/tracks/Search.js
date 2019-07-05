import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackTitle: ""
    };
  }

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
      })
      .catch(err => console.log(err));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <p className="lead text-center">
                  <big>Get 30% of lyrics for any song</big>
                </p>
                <form onSubmit={this.findTrack.bind(this, dispatch)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Song title..."
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    style={{
                      color: "black",
                      fontSize: "0.4em",
                      backgroundColor: "darkgrey"
                    }}
                    className="btn btn-primary btn-lg btn-block mb-5"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </h1>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;
