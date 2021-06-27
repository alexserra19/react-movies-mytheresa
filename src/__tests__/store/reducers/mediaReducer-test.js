import mediaTypes from '../../../store/types/mediaTypes';
import mediaReducer from '../../../store/reducers/mediaReducer';


describe('Media Reducer', () => {

    let initialState = {
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        selectedMedia: {},
        isLoading: false,
        wishList: []
    }

    const mockMovies = [
        {
            id: 1,
            title: 'title',
            description: 'description',
            date: '2020',
            image: 'image.jpg',
        }
    ]

    it('should return the initial state', () => {

        const mockInitializeStartAction = {
            type: mediaTypes.INITIALIZE_START,
        };
        const mockResultState = {
            ...initialState,
            isLoading: true
        }
        expect(mediaReducer(initialState, mockInitializeStartAction)).toEqual(mockResultState);
    });

    it('should handle INITIALIZE_FINISH', () => {

        const mockInitializeFinishAction = {
            type: mediaTypes.INITIALIZE_FINISH,
            data: {
                popularMovies: mockMovies,
                topRatedMovies: mockMovies,
                upcomingMovies: mockMovies
            }
        };

        const mockResultState = {
            ...initialState,
            popularMovies: mockMovies,
            topRatedMovies: mockMovies,
            upcomingMovies: mockMovies,
            isLoading: false
        }

        expect(mediaReducer(initialState, mockInitializeFinishAction)).toEqual(mockResultState);
    });

    it('should handle SELECT_MEDIA', () => {

        const mockSelectMediaAction = {
            type: mediaTypes.SELECT_MEDIA,
            data: mockMovies[0]
        };

        const mockResultState = {
            ...initialState,
            selectedMedia: mockMovies[0]
        }

        expect(mediaReducer(initialState, mockSelectMediaAction)).toEqual(mockResultState);
    });

    it('should handle UPDATE_WISH_LIST', () => {

        const mockUpdateWishListAction = {
            type: mediaTypes.UPDATE_WISH_LIST,
            data: mockMovies[0]
        };

        const mockResultState = {
            ...initialState,
            wishList: mockMovies
        }

        expect(mediaReducer(initialState, mockUpdateWishListAction)).toEqual(mockResultState);
    });
});
