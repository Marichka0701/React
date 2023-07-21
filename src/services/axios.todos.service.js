import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const todosService = {
    getAll: () => axiosService.get(endPoints.todos),
}

export {
    todosService,
}