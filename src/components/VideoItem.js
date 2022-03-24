import "../components/VideoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className='video-item item' key={video.id.videoId}>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} />
      <div className='description'>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
