import constants from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case constants.SEARCH_VIDEO:
      return action.payload.data.items;
      break;
    default:
      return state;
  }
}
