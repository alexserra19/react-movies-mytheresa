import mediaTypes from '../types/mediaTypes';

export const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  selectedMedia: {},
  isLoading: false,
  wishList: []
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case mediaTypes.INITIALIZE_START:
      return {
        ...state,
        isLoading: true
      }
      
    case mediaTypes.INITIALIZE_FINISH:
      return {
        ...state,
        popularMovies: action.data.popularMovies,
        topRatedMovies: action.data.topRatedMovies,
        upcomingMovies: action.data.upcomingMovies,
        isLoading: false
      }

    case mediaTypes.SELECT_MEDIA:
      return {
        ...state,
        selectedMedia: action.data
      }

    case mediaTypes.UPDATE_WISH_LIST:
      return {
        ...state,
        wishList: [...state.wishList, action.data]
      }

    default:
      return state
  }
};

export default mediaReducer;


