import React, { Component } from 'react'
import videoInfoRow from './videoInfoRow'

class VideoInfo extends Component {
   constructor(props) {
      super(props)
   }
   displayVideoDetails() {
      let { details } = this.props
      return Object.keys(details).map((key) => videoInfoRow(key, details[key]))
   }

   render() {
      return (
         <div >
            Video Info
            {this.displayVideoDetails()}
         </div>
      )
   }
}

export default VideoInfo
