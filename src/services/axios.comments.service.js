import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const commentsService = {
    getAll: () => axiosService.get(endPoints.comments),
}

export {
    commentsService,
}