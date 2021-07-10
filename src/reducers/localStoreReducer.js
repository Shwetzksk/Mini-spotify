function locallyStore(state = [], action) {
    switch (action.type) {
        case "LOCALSTORE":
            return action.payload;
        default:
            return state;
    }
}

export default locallyStore;