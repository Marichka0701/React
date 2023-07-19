import {endPoints} from '../configs/urls'
import {axiosService} from "./axios.service";

const usersService = {
    getAll: ()=>axiosService.get(endPoints.users),
    create: (user)=>axiosService.post(endPoints.users, user),
}

export {
    usersService,
}