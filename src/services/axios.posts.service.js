import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const postsService = {
    getById: (id) => axiosService.get(`${endPoints.posts}/${id}`),
}

export {
    postsService,
}