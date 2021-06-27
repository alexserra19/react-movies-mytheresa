
import MediaAdapter from '../../../utils/adapters/MediaAdapter';

afterEach(() => {
    jest.clearAllMocks();
});

describe('MediaAdapter', () => {

    const mockResponseAdapter = [
        {
            id: 1,
            title: 'title',
            description: 'description',
            popularity: 10,
            date: '2021/12/01',
            rate: 3,
            image: '',
            categories: [122],
            numVotes: 10
        }
    ]

    const mockEntries = [
        {
            "id": 1,
            "title": 'title',
            "overview": 'description',
            "popularity": 10,
            "release_date": '2021/12/01',
            "vote_average": 5,
            "poster_path": '',
            "genre_ids": [122],
            "vote_count": 10
        }
    ]

    it('JSONToMediaList', async () => {
        const data = MediaAdapter.JSONToMediaList(mockEntries)
        expect(data).toStrictEqual(mockResponseAdapter)
    });
});