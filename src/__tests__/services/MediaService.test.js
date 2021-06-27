import InterceptorService from '../../services/RequestInterceptorService';
import MediaService from '../../services/MediaService';
import MediaAdapter from '../../utils/adapters/MediaAdapter';
import AppConstants from '../../utils/AppConstants';
import configuration from "../../api/config";

afterEach(() => {
    jest.clearAllMocks();
});

describe('MediaService', () => {

    const mockResponseAdapterMedia = {
        id: 1,
        title: 'title',
        description: 'description',
        date: '2020',
        image: 'image.jpg',
    }

    const mockResponseAdapterMediaList = [
        mockResponseAdapterMedia
    ]

    const mockResponseInterceptorMedia = {
        isSuccess: true,
        data: {
            results: [
                {
                    id: 1
                }
            ]
        }
    }

    it('getMediaListByUrl', async () => {
        const mockUrl = AppConstants.domain + configuration.routes.getPopularMovies.replace('{key}', AppConstants.apiKey)
        const interceptorSpy = jest.spyOn(InterceptorService, 'doRequest').mockImplementation(() => Promise.resolve(mockResponseInterceptorMedia));
        const adapterSpy = jest.spyOn(MediaAdapter, 'JSONToMediaList').mockImplementation(() => mockResponseAdapterMediaList);

        const data = await MediaService.getMediaListByUrl(configuration.routes.getPopularMovies)

        expect(interceptorSpy).toBeCalledWith(mockUrl)
        expect(adapterSpy).toBeCalledWith(mockResponseInterceptorMedia.data.results)
        expect(data).toBe(mockResponseAdapterMediaList)
    });

    it('getMediaDetailsById', async () => {

        const mockId = 1
        let mockUrl = AppConstants.domain + configuration.routes.getMovieDetails.replace('{movie_id}', mockId)
        mockUrl = mockUrl.replace('{key}', AppConstants.apiKey)
        const interceptorSpy = jest.spyOn(InterceptorService, 'doRequest').mockImplementation(() => Promise.resolve(mockResponseInterceptorMedia));
        const adapterSpy = jest.spyOn(MediaAdapter, 'JSONToMedia').mockImplementation(() => mockResponseAdapterMedia);

        const data = await MediaService.getMediaDetailsById(mockId)

        expect(interceptorSpy).toBeCalledWith(mockUrl)
        expect(adapterSpy).toBeCalledWith(mockResponseInterceptorMedia.data)
        expect(data).toBe(mockResponseAdapterMedia)
    });
});
