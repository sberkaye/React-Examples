import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import flv from "flv.js";

import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  // Component isolation
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  // if the player can not be built in the initial render after componentDidMount
  // try to build it again with each re-render
  componentDidUpdate() {
    this.buildPlayer();
  }

  // When the user stops viewing the video, stop trying to stream the video and
  // detach the player from the video element in the DOM
  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  // build the flv player with the correct id and load it
  buildPlayer = () => {
    // if we don't have the stream or the player has already been built, return
    if (!this.props.stream || this.flvPlayer) {
      return;
    }
    const { id } = this.props.match.params;
    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "80%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
