import _ from 'lodash'; //for throttling, also, normally we use _ to represent lodash
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAopWlQA9Ea2zYah9OszX_xMjtl3XSJxVQ';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import axios from 'axios';

//download a package to make a search request: youtube api search, return some data based on user's search
const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8182dc9d3ddd42bb27898e4340f0d990&query=';
//const API_KEY_TMDB = '8182dc9d3ddd42bb27898e4340f0d990';


//create a new component, and this component would produce some HTML
//change to class based component
class App extends Component{
  //whenever the user search, give that search value to the state, so we nned to initiate a state in ctor
  constructor(props){
    super(props);
    //add "select video" function, add a term to state, and that would be passed to children
    //update the video: pass a callback from app -> videolist ->videolistitem. If user click one video item, then run the call back with a video that belongs to it
    this.state = {
      videos: [],
      selectedVideo: null //pass it to videodetalis
    };
    //Real Search:
    //When the app runs, it better that user could see some data pop away, so move the TYSearch to ctor
    this.videoSearch('a'); //keep our intial search
  }

  videoSearch(term){  //the search term: users input
    const API_URL_TMDB = API_URL + term; //Function: Search
    axios.get(API_URL_TMDB)
    .then((response) => {
      this.setState({
        videos: response.data.results
      })
      console.log(response.data.results)
    })
    .catch(error => {
      console.log(error);
    })

    // YTSearch({key: API_KEY, term: term}, (videos) => {
    //   this.setState({
    //     videos: videos, //videos can be "data"
    //     selectedVideo: videos[0]
    //   });
    // });
  }

  render () {
    //take the videoSearch function we defined above, wrap it to a debounce version , and only call it every 300 ms
    //effect: only when input stop, search happens
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 100);

    //passing data from parent to child: passing the props!
    return (
    <div>
      <SearchBar onSearchTermChange = {videoSearch}/>
      <VideoDetail video = {this.state.selectedVideo} />
      <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />
    </div>
  );
  }
}

//Next: take this component, generate HTML and put it on the page ,whcih is in the DOM

//1.
//err: ReactDOM.render(App);
//Console: Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
//App is a component class!

//2.
//ReactDOM.render(<App />);
//wrap it with jsx tags
//now <App /> is a component instance
//in Babel:
/*
const App = function(){
  return <div>Hi!</div>;
}
  <App></App> : generate a component instance
*/

//3.
ReactDOM.render(<App/>, document.querySelector('.container'));
