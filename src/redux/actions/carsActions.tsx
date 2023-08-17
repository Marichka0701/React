import {carsService} from "../../services/axios.cars.service";

export const carActionTypes = {
    SET: 'SET',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
    CREATE: 'CREATE',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE',
};

export const carsActions = {
    SET: (cars) => ({type: carActionTypes.SET, payload: cars}),
    DELETE: (id) => ({type: carActionTypes.DELETE, payload: id}),
    UPDATE: (id, car) => ({type: carActionTypes.UPDATE, payload: {id, car}}),
    CREATE: (car) => ({type: carActionTypes.UPDATE, payload: car}),
    SET_CAR_FOR_UPDATE: (car) => ({type: carActionTypes.SET_CAR_FOR_UPDATE, payload: car}),
};

export const carThunks = {
    create: (car) => (dispatch) => {
        carsService.create(car)
            .then(({data}) => dispatch(carsActions.CREATE(car)))
    },
    update: (id, car) => (dispatch) => {
        carsService.updateById(id, car)
            .then(() => dispatch(carsActions.UPDATE(id, car)))
    },
    get: () => (dispatch) => {
        carsService.getAll()
            .then(value => dispatch(carsActions.SET(value.data)))
    },
    delete: (id) => (dispatch) => {
        carsService.delete(id)
            .then(() => dispatch(carsActions.DELETE(id)))
    },
}