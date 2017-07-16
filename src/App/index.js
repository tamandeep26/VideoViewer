import React, { Component } from 'react';
import Search from './Search'
import VideoList from './VideoList'
import Video from './Video'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDevDEP33WWpKhgv7qzvsNcsM_GBmP-eSI'

export default class App extends Component {
   constructor(props) {
      super(props)
      this.videoSearch('surf')
      this.state = {videos : [], selectedVideo: null}
   }
   videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
         this.setState({
            videos: videos,
            selectedVideo: videos[0]
      });
   });
}
  render() {
    return (
      <div>
         <Search onSearchTermChange={(term) => this.videoSearch(term)}/>
         <Video video = {this.state.selectedVideo}/>
         <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos} />
      </div>

    );
  }
}
