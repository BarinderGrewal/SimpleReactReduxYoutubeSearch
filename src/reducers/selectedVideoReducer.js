import constants from '../actions/constants';

export default function(state = null, action) {
  switch (action.type) {
    case constants.SELECTED_VIDEO:
      return  action.selectedVideo;
      break;
    default:
      return state;
  }
}
