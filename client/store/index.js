import {createStore, combineReducers, applyMiddleware} from 'redux';
import { SET_RESTAURANTS } from './restaurants';
import thunkMiddleware from "redux-thunk"
import axios from 'axios';

const store = createStore(combineReducers({
    restaurants: (state = [], action) => {
        if (action.type === "SET_RESTAURANTS") {
            return action.restaurants;
        }
        return state;
    }
}), applyMiddleware(thunkMiddleware))

export default store;