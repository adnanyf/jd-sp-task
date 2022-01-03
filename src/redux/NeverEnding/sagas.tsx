import { call, put, takeLatest } from 'redux-saga/effects'
import { jokePayload } from '../../utils/jokePayload.interface';
import { neverEndingJokes } from '../../utils/api'
import {
    NEVER_ENDING_JOKES,
    NEVER_ENDING_JOKES_START,
    NEVER_ENDING_JOKES_SUCCESS,
    NEVER_ENDING_JOKES_ERROR,
} from "./actions";

function* fetchNeverEndingJokes({ payload: { isExplicit, numberOfJokes } }: { payload: any }) {
    try {
        yield put({ type: NEVER_ENDING_JOKES_START })
        const response = yield call(neverEndingJokes, isExplicit, numberOfJokes)
        yield put({ type: NEVER_ENDING_JOKES_SUCCESS, payload: response.data })
    } catch (error) {
        yield put({ type: NEVER_ENDING_JOKES_ERROR, error: error })
    }
}

function* watchFetchNeverEndingJokes() {
    yield takeLatest(NEVER_ENDING_JOKES, fetchNeverEndingJokes)
}

const watchers = [watchFetchNeverEndingJokes()]
export default watchers
