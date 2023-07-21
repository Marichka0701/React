import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const albumsService = {
    getAll: () => axiosService.get(endPoints.albums),
}

export {
    albumsService,
}