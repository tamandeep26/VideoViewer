import React,{ Component } from 'react'
import videoListItem from './videoListItem'
class VideoList extends Component{
   constructor(props){
      super(props)

   }

   playVideo(){
      let {videos} = this.props

      return videos.map((video) => videoListItem(video,this.props.onVideoSelect))
   }

   render() {
      return(
         <ul className="col-md-4 list-group">
            {this.playVideo()}
         </ul>

      )
   }
}

export default VideoList
