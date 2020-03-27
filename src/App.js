import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Video } from './Video';
import {Menu} from './Menu'

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
  }
  chooseVideo=(newVideo)=> {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video video={this.state.src}/>
      </div>
    );
  }
}

export default App