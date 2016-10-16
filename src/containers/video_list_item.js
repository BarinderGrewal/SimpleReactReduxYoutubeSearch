import React ,{Component} from 'react';
import {selectVideo} from "../actions";
import {connect} from 'react-redux';

const VideoListItem = (props) =>{
  const url = 'https://www.youtube.com/v/';
  return (
    <li  className='video-item list-group-item'>
    <div onClick={()=>{props.setSelectedVideo(props.element);}}>
    <img src={props.element.snippet.thumbnails.default.url}/>
    {props.element.snippet.title}
    </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedVideo: (video) => {
      dispatch(selectVideo(video));
    }
  }
}
export default connect(null,mapDispatchToProps)(VideoListItem);
