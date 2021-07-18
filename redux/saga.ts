import { call, put, takeEvery } from 'redux-saga/effects'
import {setCarriersCreator, setFlightsCreator} from "./reducer";
import {ASYNC_FETCH_FLIGHTS} from "./actions";

const fetchData = () => fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/anytime',
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9ba4372b6fmshacafbfbea9a5e02p1d2cf4jsn24c3f8869113",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })

function* fetchFlights() {
    try {
        const getFlights = yield call(fetchData);
        const json = yield call(() => getFlights.json());
        const flights = [...Object.values(json['Quotes'])]
        const carriers = [...Object.values(json['Carriers'])]

        yield put(setFlightsCreator(flights));
        yield put(setCarriersCreator(carriers));
    } catch (e) {
        yield put({type: "FETCH_FLIGHTS_FAILED", message: e.message});
        console.log(e.message)
    }
}

export function* flightsWatcher() {
    yield takeEvery(ASYNC_FETCH_FLIGHTS, fetchFlights);
}

