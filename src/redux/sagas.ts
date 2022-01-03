import { all } from 'redux-saga/effects';
import chuckSaga from './Chuck/sagas';
import neverEndingJokesSaga from './NeverEnding/sagas';
function* rootSaga() {
    yield all([
        ...chuckSaga,
        ...neverEndingJokesSaga
    ]);
}

export default rootSaga;