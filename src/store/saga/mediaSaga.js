import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import moviesTypes from '../types/mediaTypes'
import MediaService from '../../services/MediaService';
import mediaActions from '../actions/mediaActions';
import _ from 'lodash';
import config from '../../api/config';


export function* initialize() {
    const { popularMovies = [], topRatedMovies = [], upcomingMovies = [] } = yield all({
        popularMovies: call(MediaService.getMediaListByUrl, config.routes.getPopularMovies),
        topRatedMovies: call(MediaService.getMediaListByUrl, config.routes.getTopRatedMovies),
        upcomingMovies: call(MediaService.getMediaListByUrl, config.routes.getUpcomingMovies),
    });

    yield put(mediaActions.initializeFinish(popularMovies, topRatedMovies, upcomingMovies))
}



export default [
    takeLatest(moviesTypes.INITIALIZE_START, initialize),
]