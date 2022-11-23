import { createStore, combineReducers, applyMiddleware } from "redux";
import { videoplayerReducer } from "../reducers/videoplayerReducer";

const reducers = combineReducers({
    video : videoplayerReducer  
})

export const store = createStore(
    reducers,
);