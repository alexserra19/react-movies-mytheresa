import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

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


test('renders App Correctly', () => {
  const wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
