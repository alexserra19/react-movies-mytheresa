import AppConstants from "../utils/AppConstants";
import MediaAdapter from "../utils/adapters/MediaAdapter";
import RequestInterceptorService from "./RequestInterceptorService";
import config from "../api/config";

class MediaService {

    async getMediaListByUrl(url){
        let queryUrl = AppConstants.domain + url.replace('{key}', AppConstants.apiKey);
        let response = await RequestInterceptorService.doRequest(queryUrl);
        let data = []
        if (response?.isSuccess) {
            data = MediaAdapter.JSONToMediaList(response.data.results)
        }
        return data
    }

    async getMediaDetailsById(mediaId){
        let url = config.routes.getMovieDetails.replace('{movie_id}', mediaId)
        let queryUrl = AppConstants.domain + url.replace('{key}', AppConstants.apiKey);
        let response = await RequestInterceptorService.doRequest(queryUrl);
        let data = []
        if (response?.isSuccess) {
            data = MediaAdapter.JSONToMedia(response.data)
        }
        return data
    }
}

export default new MediaService();
