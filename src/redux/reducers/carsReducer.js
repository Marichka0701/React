import {carActionTypes} from "../actions/carsActions";

const initialState = {
    cars: [],
    carForUpdate: null,
}
export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carActionTypes.SET:
            return {
                ...state,
                cars: action.payload,
            }
        case carActionTypes.UPDATE:
            return {
                ...state,
                cars: state.cars.map((car) => car.id === action.payload.id ? car = action.payload.car : car),
            }
        case carActionTypes.DELETE:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload),
            }
        case carActionTypes.CREATE:
            return {
                ...state,
                cars: [...state.cars, action.payload],
            }
        case carActionTypes.SET_CAR_FOR_UPDATE:
            return {
                ...state,
                carForUpdate: action.payload,
            }
        default: return state;
    }
};