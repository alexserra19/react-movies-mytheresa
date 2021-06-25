import AppConstants from "../utils/AppConstants";
import configuration from "../api/config";
import MediaAdapter from "../utils/adapters/MediaAdapter";
import RequestInterceptorService from "./RequestInterceptorService";

class MediaService {

    async getMediaListByUrl(url){
        let queryUrl = AppConstants.domain + url
        let response = await RequestInterceptorService.doRequest(queryUrl);
        let data = []
        if (response?.isSuccess) {
            data = MediaAdapter.JSONToMediaList(response.data.entries)
        }
        return data
    }
}

export default new MediaService();
