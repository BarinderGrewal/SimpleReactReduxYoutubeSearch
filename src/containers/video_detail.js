import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({video}) => {
  const url = 'https://www.youtube.com/v/';
  if(video === null) {
    return (
      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' ></iframe>
        </div>
      </div>
  );
  //  return <div>Loading...</div>;
  }

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url + video.id.videoId} ></iframe>
      </div>
      <div className='details'>
        {video.snippet.title} <br/>
        {video.snippet.description}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { video: state.selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);
