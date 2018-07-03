import types from './types';


// action creator
export function tick(now){
    return {
        type: 'update_time',
        currentTime: now
    }
}


