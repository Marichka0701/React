import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";

const RMService = {
    getAllCharacters: (page) => axiosService.get(endPoints.characters, {params: {page}}),
    getAllEpisodes: (page) => axiosService.get(endPoints.episodes, {params: {page}}),
    getAllLocations: (page) => axiosService.get(endPoints.locations, {params: {page}}),
}

export {
    RMService,
}