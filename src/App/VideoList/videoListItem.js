import React from 'react'

const VideoListItem = (video, onVideoSelect) => {
   let imageUrl = video.snippet.thumbnails.default.url
  return (
     <li onClick={() => onVideoSelect(video)} key={video.etag} className="list-group-item">
       <div className="video-list media">
        <div className="video-item media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
       </div>
     </li>
  )
}

export default VideoListItem
