import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const carsService = {
    getAll: () => axiosService.get(endPoints.cars),
    create: (car) => axiosService.post(endPoints.cars, car),
    getById: (id) => axiosService.get(`${endPoints.cars}/${id}`),
    updateById: (id, car) => axiosService.put(`${endPoints.cars}/${id}`, car),
    delete: (id) => axiosService.delete(`${endPoints.cars}/${id}`),
}

export {
    carsService,
}