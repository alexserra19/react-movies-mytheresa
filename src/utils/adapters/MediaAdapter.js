import AppConstants from "../AppConstants";

class MediaAdapter {

    JSONToMediaList(mediaList) {
        let mediaListAdapted = mediaList.map((item) => this.JSONToMedia(item))
        return mediaListAdapted
    }


    JSONToMedia(media) {
        return (
            {
                id: media.id,
                title: media.title,
                description: media.overview,
                popularity: media.popularity,
                date: media.release_date,
                rate: Math.round(media.vote_average / 2),
                image: media.poster_path ? (AppConstants.imageUrl + media.poster_path) : '',
                categories: media.genre_ids,
                numVotes: media.vote_count
            }
        )

    }
}

export default new MediaAdapter();
