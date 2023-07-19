import {endPoints} from '../configs/urls'
import {axiosService} from "./axios.service";

const commentsService = {
    getAll: ()=>axiosService.get(endPoints.comments),
    create: (comment)=>axiosService.post(endPoints.comments, comment),
}

export {
    commentsService,
}