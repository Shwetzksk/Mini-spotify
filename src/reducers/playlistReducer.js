function playlistReducer(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter(track=>track !== action.payload);
        default:
            return state;
    }
}

export default playlistReducer;