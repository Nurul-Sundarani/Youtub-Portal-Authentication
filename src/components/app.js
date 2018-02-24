import React, { Component } from 'react';
import  Header  from './header'

import _ from 'lodash'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyCcv_oro5oJ81gTRK10sQHAaRL4BTaHnYs';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
        videos : [],
        selectedVideo : null
    };

    this.videoSearch('Yomaste Ladakh VR experience');

}

videoSearch(term){
    YTSearch({key:API_KEY , term : term} , (videos) => {
        this.setState({
            videos:videos,
            selectedVideo:videos[0]
        });
    })
}
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);

    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>  
            <VideoList 
            onVideoSelect = {selectedVideo  => this.setState({selectedVideo}) }
            videos = {this.state.videos}/> 
      </div>
    );
  }
}

