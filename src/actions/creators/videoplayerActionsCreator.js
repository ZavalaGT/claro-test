import { videoplayerTypes } from "../types/videoplayerTypes";

export const setVideoPlayer = (urlVideo) => ({
    type: videoplayerTypes.SET_VIDEOPLAYER,
    payload : urlVideo
})

export const clearVideoPlayer = ( ) => ({
    type: videoplayerTypes.CLEAR_VIDEOPLAYER,
})