
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from "redux-persist";

import  rootReducer from './rootReducer'

import logger from "redux-logger";

const middlewares = []

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }  

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);