import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    return (
      <div className="ui relaxed divided list">
        {videos.map((video) => (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
