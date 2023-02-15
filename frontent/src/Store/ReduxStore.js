import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose
} from "redux"
import thunk from "redux-thunk"
import { reducers } from "../Reducers/indes"

function saveToLocalStorage(store) {
    try {
        const serialzedStore = JSON.stringify(store)
        window.localStorage.setItem('store', serialzedStore)
    } catch (error) {
        console.log(error);
    } 
}

function loadFormLocalStore() {
    try {
        const serialzedStore = window.localStorage.getItem('store')
        if (serialzedStore === null) return undefined
        return JSON.parse(serialzedStore)
    } catch (error) {
        console.log(error);
        return undefined
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedState = loadFormLocalStore()
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(() => saveToLocalStorage(store.getState()))
export default store