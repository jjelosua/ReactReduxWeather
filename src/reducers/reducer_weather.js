import { FETCH_WEATHER } from '../actions/index';
// state argument is not application state 
// only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return action.payload.data;
    }

    return state;
}