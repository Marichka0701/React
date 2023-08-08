import {axiosService} from "./axios.service";
import {endpoints} from "../configs/urls";

const usersService = {
    getAll: () => axiosService.get(endpoints.users),
    getById: (id) => axiosService.get(`${endpoints.users}/${id}`),
}