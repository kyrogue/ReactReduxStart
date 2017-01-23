import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from'./components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY ='AIzaSyBjZjqqojUFRGJyA6b0OdVKJpo4zJ8IssY';

class App extends Component{
  constructor(props){
    super(props);
    //state with 'videos' as name, with array of obj as data.
    this.state = { 
      videos:[] ,
      selectedVideo:null
  };
  this.videoSearch('surfboards');
  }

  videoSearch(term){
    //function(data) replaced with (videos)=> , parameter of received videos
    //setState({videos:data}}) replaced with {videos} , ES6 , if key and value same string can replace with shorthand
    //set first video as default.
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }

  //passing props 'state.videos' from App parent to VideoList as videos.
  //undefined can happen, as rendering null obj when not yet loaded.
  render(){
    //returns new function that can be called every 300ms,given a function.
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.container'));