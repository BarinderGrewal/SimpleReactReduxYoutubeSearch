import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchVideo} from '../actions';

const SearchBar = (props) => {

    return(
      <div className = 'search-bar'>
        <input onChange={(event)=>{props.searchVideo(event.target.value);}}/>
      </div>
  );
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({searchVideo}, dispatch);

}
export default connect(null,mapDispatchToProps)(SearchBar);
