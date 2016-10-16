import selectedVideoReducer from './selectedVideoReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  searchVideo : searchReducer,
  selectedVideo: selectedVideoReducer
});

export default reducers;
