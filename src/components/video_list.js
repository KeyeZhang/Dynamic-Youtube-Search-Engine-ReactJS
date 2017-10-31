//make it a plain functional com[onent

import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) =>{ // props from parents would arrive here as params
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        //pass callback down, down to videolistitem!
        onVideoSelect = {props.onVideoSelect}
        key = {video.id}
        video = {video} />
    );
  });
  //const data = props.videos, "data" would be an array of vidoes!
  return (
    //making a list: build a loop(stay from for loop!)
    //better: to use map iterator
    <ul className = "col-md-4  list-group">
    {videoItems}
    </ul>
  );
};

export default VideoList;
