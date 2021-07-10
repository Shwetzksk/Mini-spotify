import playlistReducer from './playlistReducer';
import spotifyDataReducer from './spotifyDataReducer';
import locallyStore from './localStoreReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    tracks: playlistReducer,
    spotifyData: spotifyDataReducer,
    localStore: locallyStore,
});

export default allReducers;