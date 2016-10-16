import constants from "./constants";
import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyDzrOhZjaL02OlAIIvdxTPWbAu0uxWGGVE';

export function selectVideo(video) {

  return {type: constants.SELECTED_VIDEO,
          selectedVideo:video};
}

export function searchVideo(term) {
  let params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };
  const promise = axios.get(ROOT_URL, { params: params });
  return {
    type: constants.SEARCH_VIDEO,
    payload: promise,
    meta: {
    debounce: {
      time: 300
    }
  }
  };
}
