import {
    ASYNC_FETCH_FLIGHTS,
    FETCH_FLIGHTS,
    FETCH_FLIGHTS_FAILED,
    FETCH_FLIGHTS_SUCCESS, SET_CARRIERS,
    ADD_FAVORITES, REMOVE_FAVORITES, FAVORITES_FLIGHTS
} from "./actions";

const defaultState = {
    flights: [],
    favoritesFlights: [],
    carriers: [],
    favorites: []
}

export default function rootReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_FLIGHTS: return {
            ...state,
            flights: action.payload
        };
        case SET_CARRIERS: return {
            ...state,
            carriers: action.payload
        };
        case FETCH_FLIGHTS_SUCCESS: return {...state, flights: action.payload };
        case FETCH_FLIGHTS_FAILED: return {...state, flights: action.payload };
        case FAVORITES_FLIGHTS: return {
            ...state,
            favoritesFlights: state.flights
        };
        case ADD_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload],
                favoritesFlights: [...state.favoritesFlights.concat(state.flights.filter((item) => item.QuoteId == action.payload))]
            }
        case REMOVE_FAVORITES:
            return {...state, favorites: state.favorites.filter((id) => id != action.payload),
                favoritesFlights: [...state.favoritesFlights.filter((item) => item.QuoteId != action.payload)]
            }
        default: return state;
    }
}

export const setFlightsCreator = (payload) => ({type: FETCH_FLIGHTS, payload})
export const setCarriersCreator = (payload) => ({type: SET_CARRIERS, payload})
export const addFavoritesCreator = (payload) => ({type: ADD_FAVORITES, payload})
export const removeFavoriteCreator = (payload) => ({type: REMOVE_FAVORITES, payload})
export const fetchAsyncFlightsCreator = () => ({type: ASYNC_FETCH_FLIGHTS})
