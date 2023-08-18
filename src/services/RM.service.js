import {axiosService} from "./axios.service";
import {endPoints} from "../configs/urls";
import axios from "axios";

const RMService = {
    getAllCharacters: (page) => axiosService.get(endPoints.characters, {params: {page}}),
    getCharacter: (link) => axios.get(link)
        .then(res => res.data),

    getAllEpisodes: (page) => axiosService.get(endPoints.episodes, {params: {page}}),

    getAllLocations: (page) => axiosService.get(endPoints.locations, {params: {page}}),
}

export {
    RMService,
}