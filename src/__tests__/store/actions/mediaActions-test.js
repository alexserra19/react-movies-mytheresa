import mediaTypes from '../../../store/types/mediaTypes';
import mediaActions from '../../../store/actions/mediaActions';


describe('Media Actions', () => {

    const mockMovies = [
        {
            id: 1,
            title: 'title',
            description: 'description',
            date: '2020',
            image: 'image.jpg',
        }
    ]

    const mockMedia = {
        id: 1,
        title: 'title',
        description: 'description',
        date: '2020',
        image: 'image.jpg',
    }

    it('initializeStart', () => {
        
        const expectedAction = {
            type: mediaTypes.INITIALIZE_START,
        }

        expect(mediaActions.initializeStart()).toEqual(expectedAction)
    });

    it('initializeFinish', () => {

        const expectedAction = {
            type: mediaTypes.INITIALIZE_FINISH,
            data: {
                popularMovies: mockMovies,
                topRatedMovies: mockMovies,
                upcomingMovies: mockMovies
            }
        }

        expect(mediaActions.initializeFinish(mockMovies, mockMovies, mockMovies)).toEqual(expectedAction)
    });

    it('selectMedia', () => {

        const expectedAction = {
            type: mediaTypes.SELECT_MEDIA,
            data: mockMedia
        }

        expect(mediaActions.selectMedia(mockMedia)).toEqual(expectedAction)
    });

    it('updateWishList', () => {

        const expectedAction = {
            type: mediaTypes.UPDATE_WISH_LIST,
            data: mockMedia
        }

        expect(mediaActions.updateWishList(mockMedia)).toEqual(expectedAction)
    });

});