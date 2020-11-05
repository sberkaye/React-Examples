import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const { videos } = this.props;
    return (
      <div className="ui relaxed divided list">
        {videos.map((video) => (
          <VideoItem video={video} />
        ))}
      </div>
    );
  }
}

export default VideoList;
