import React from 'react'

const VideoDetail = ({video}) =>{
  if(!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId; ES6 magic: same thing as above
  // const url = `https://www.youtube.com/embed/${videoId}`;
  const imgUrl = "http://image.tmdb.org/t/p/w185/" + video.poster_path;
  //Learn: "Craft the URL"!!!
  //the only thing change in urls for diff videos is the id of the video

  return (
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <img src = {imgUrl} />
      </div>

      <div className = "details">
        <div>{video.title}</div>
        <div>{video.overview}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
