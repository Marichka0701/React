import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";
import { AxiosResponse } from 'axios';
import {ICar} from "../interfaces/car.interface";

type IRep<T> = Promise<AxiosResponse<T>>;
type IRepUpdate<T> = Promise<[number, T]>;

const carsService = {
    getAll: ():IRep<ICar[]> => axiosService.get(endPoints.cars),
    create: (car):IRep<ICar> => axiosService.post(endPoints.cars, car),
    getById: (id):Promise<number> => axiosService.get(`${endPoints.cars}/${id}`),
    updateById: (id, car):IRepUpdate<Partial<ICar>> => axiosService.put(`${endPoints.cars}/${id}`, car),
    delete: (id):Promise<number> => axiosService.delete(`${endPoints.cars}/${id}`),
}

export {
    carsService,
}