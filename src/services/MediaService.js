import AppConstants from "../utils/AppConstants";
import MediaAdapter from "../utils/adapters/MediaAdapter";
import RequestInterceptorService from "./RequestInterceptorService";

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
}

export default new MediaService();
