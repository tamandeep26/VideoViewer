import React, { Component } from 'react'
import VideoInfo from './VideoInfo'

class Video extends Component{
   constructor(props) {
      super(props)

   }
  render() {
     let { video } = this.props
     if(video) {
       let videoId = video && video.id && video.id.videoId
       let url = 'https://www.youtube.com/embed/' + videoId

       return (
          <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url}/>
            </div>

              <div className="details">
                <div> {video.snippet.title}</div>
                <div> {video.snippet.description}</div>
              </div>
          </div>

       )
    } else {
      return <div />
   }

 }
}
export default Video
