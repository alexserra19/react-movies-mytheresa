import React from 'react';
import Details from '../../../pages/Details/Details';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import MediaService from '../../../services/MediaService';

jest.useFakeTimers()


const middlewares = []
const mockStore = configureStore(middlewares)

const store = mockStore(
  {
    mediaReducer: {
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
      selectedMedia: {},
      isLoading: false,
      wishList: []
    }
  }
)

describe('Details', () => {

  const mockProps = {
    media: {
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
      selectedMedia: {},
      isLoading: false,
      wishList: []
    },
    actions: {
      media: {
        updateWishList: jest.fn()
      }
    },
    match: {
      params: {
        id: 1
      }
    }
  }

  const mockResponse = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      date: '2020',
      image: 'image.jpg',
    }
  ]


  it('should match the snapshot', () => {
    const wrapper = render(
      <Provider store={store}>
        <Details  {...mockProps} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('On componentDidMount should call MediaService', () => {
    const wrapper = render(
      <Provider store={store}>
        <Details  {...mockProps} />
      </Provider>
    );

    jest.spyOn(MediaService, "getMediaDetailsById").mockImplementation(() => Promise.resolve(mockResponse));

    setImmediate(() => {
      expect(MediaService.getMediaDetailsById).toBeCalledWith(1);
    });
  })
});
