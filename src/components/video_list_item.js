import React from 'react'

const VideoListItem = ({video, onVideoSelect}) =>{
  //= ({video}): we plug out "video" from the prop, same as:
  //const video = props.video;
  //get back from its parent
  //const imgUrl = video.snippet.thumbnails.default.url;
  const imgUrl = "http://image.tmdb.org/t/p/w185/" + video.poster_path;

  return (
    <li onClick = {() => onVideoSelect(video)} className = "list-group-item">
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src = {imgUrl}/>
        </div>

        <div className = "media-body">
          <div className = "media-heading">{video.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
