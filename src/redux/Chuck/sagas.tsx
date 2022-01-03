import { call, put, takeLatest } from 'redux-saga/effects'
import { jokePayload, jokeType } from '../../utils/jokePayload.interface';
import { getJoke, nameJoke } from './../../utils/api'
import {
    RANDOM_JOKES,
    RANDOM_JOKES_START,
    RANDOM_JOKES_SUCCESS,
    RANDOM_JOKES_ERROR
} from "./actions";

function* fetchRandomJoke({ payload: { type, isExplicit, metadata } }: { payload: jokePayload }) {
    try {
        let response: unknown;
        yield put({ type: RANDOM_JOKES_START })
        switch (type) {
            case jokeType.random:
                response = yield call(getJoke, isExplicit)
                break;
            case jokeType.search:
                response = yield call(nameJoke, isExplicit, metadata)
                break;
        }
        yield put({ type: RANDOM_JOKES_SUCCESS, payload: response.data })
    } catch (error) {
        yield put({ type: RANDOM_JOKES_ERROR, error: error })
    }
}

function* watchFetchRandomJoke() {
    yield takeLatest(RANDOM_JOKES, fetchRandomJoke)
}

const watchers = [watchFetchRandomJoke()]
export default watchers
