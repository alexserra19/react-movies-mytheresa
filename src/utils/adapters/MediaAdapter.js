import AppConstants from "../AppConstants";

class MediaAdapter {

    JSONToMediaList(mediaList){
        let mediaListAdapted = mediaList.map((item) => {
            return (
                {
                    id: item.id,
                    title: item.title,
                    description: item.overview,
                    popularity: item.popularity,
                    date: item.release_date,
                    rate: item.vote_average,
                    image: item.poster_path ? (AppConstants.imageUrl + item.poster_path) : '',
                    categories: item.genre_ids,
                    numVotes: item.vote_count
                }
            )
        })
        return mediaListAdapted
    }


    JSONToCategoryList(categoryList){
        let categoryListAdapted = categoryList.map((item) => {
            return (
                {
                    id: item.id,
                    genre: item.name
                }
            )
        })
        return categoryListAdapted
    }
}

export default new MediaAdapter();
