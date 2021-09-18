// import { createStore, combineReducers } from "redux";
// import { authReducer } from "../reducers/authReducer";

// const reducers = combineReducers({
//     auth: authReducer
// })

// export const store = createStore(reducers)


import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)