import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { combinedReducers } from './reducers';
import { persistStore, persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage';

// import storage from 'redux-persist/lib/storage'
import rootSaga from './sagas';
import logger from 'redux-logger'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, combinedReducers)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    applyMiddleware(...[
        sagaMiddleware,
        // logger
    ])
);
let persistor = persistStore(store)
sagaMiddleware.run(rootSaga);
export { store, persistor }