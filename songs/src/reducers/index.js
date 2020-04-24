import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Clocks', duration: '4:05' },
        { title: 'Madness', duration: '3:51' },
        { title: 'Thunder', duration: '4:22' },
        { title: 'Imagination', duration: '3:37' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});