import { legacy_createStore, combineReducers, applyMiddleware, } from "redux";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import { photosReducer } from "./photos";
import { rootWatcher } from "../saga/index";



const rootReducer = combineReducers({
    photosReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blackList:{photosReducer},
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
let store = legacy_createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

export { store, persistor };

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>;