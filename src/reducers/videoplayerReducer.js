import { videoplayerTypes } from "../actions/types/videoplayerTypes";

const initailState = {
    urlVideo:'Y9ScxCemsPM'
}

export const videoplayerReducer = (state = initailState, action) => {
    switch (action.type) {
        case videoplayerTypes.SET_VIDEOPLAYER:
            return {
                ...state, urlVideo: action.payload
            }
        case videoplayerTypes.CLEAR_VIDEOPLAYER:
            return {
                initailState
            }
        default:
            return state
    }
}