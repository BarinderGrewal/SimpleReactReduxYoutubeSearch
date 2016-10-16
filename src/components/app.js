import React from 'react';
import SearchBar from '../containers/search_bar'
import VideoDetail from '../containers/video_detail'
import VideoList from '../containers/video_list'

const App = () => {
    return (
    <div>
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default App;
