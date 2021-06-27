import MediaService from '../../../services/MediaService';
import { initialize } from '../../../store/saga/mediaSaga';
import { call, put } from 'redux-saga/effects';
import mediaActions from '../../../store/actions/mediaActions';
import config from '../../../api/config';
import { all } from '@redux-saga/core/effects';


describe('Media Saga', () => {

    it('initialize', async () => {

        const gen = initialize();

        let popularMovies = []
        let topRatedMovies = []
        let upcomingMovies = []

        expect(gen.next().value).toEqual(all({
            popularMovies: call(MediaService.getMediaListByUrl, config.routes.getPopularMovies),
            topRatedMovies: call(MediaService.getMediaListByUrl, config.routes.getTopRatedMovies),
            upcomingMovies: call(MediaService.getMediaListByUrl, config.routes.getUpcomingMovies),
        }))

        expect(gen.next({ popularMovies, topRatedMovies, upcomingMovies }).value)
            .toEqual(put(mediaActions.initializeFinish(popularMovies, topRatedMovies, upcomingMovies)));

    });

});