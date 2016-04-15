import { FETCH_WEATHER } from '../actions/index';
// state argument is not application state 
// only the state this reducer is responsible for
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // Never mutate state inside reducers
            // return state.push(action.payload.data);
            
            // return state.concat([action.payload.data]);
            // Same as above but with ES6 syntax
            return [ action.payload.data, ...state ]
    }

    return state;
}