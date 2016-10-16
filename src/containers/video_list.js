import React, {Component} from 'react';
import VideoListItem from './video_list_item'
import {connect} from 'react-redux';

const VideoList = ({list}) => {
    const  VideoListItems = list.map(element => {
        return <VideoListItem key={element.etag} element={element}/>;
    });
    return(
    <ul className='col-md-4'>
      {VideoListItems}
    </ul>
  );
  }

function mapStateToProps(state){
  return {
    list : state.searchVideo
  };
}
export default connect(mapStateToProps)(VideoList);
