import moviesTypes from '../types/mediaTypes';
import { Action } from 'redux';

const mediaActions = {
  initializeStart() {
    return {
      type: moviesTypes.INITIALIZE_START,
    };
  },
  initializeFinish(popularMovies, topRatedMovies, upcomingMovies) {
    return {
      type: moviesTypes.INITIALIZE_FINISH,
      data: { popularMovies, topRatedMovies, upcomingMovies }
    };
  },
  selectMedia(media) {
    return {
      type: moviesTypes.SELECT_MEDIA,
      data: media
    }
  },
  updateWishList(media) {
    return {
      type: moviesTypes.UPDATE_WISH_LIST,
      data: media
    }
  }
}

export default mediaActions;