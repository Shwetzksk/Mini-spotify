function spotifyDataReducer(state = [], action) {

    switch (action.type) {
        case "STORE":
            if (action.payload) {
                return action.payload;
            }
            return state;
        default:
            return state;
    }

}

export default spotifyDataReducer;