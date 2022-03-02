import {createStore ,combineReducers } from "redux";
import { ProductReducer } from "./Reducers/ProductReducer";



export const ConfigureStore=()=>{

    const store = createStore(combineReducers({

        ProductReducer
     
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};