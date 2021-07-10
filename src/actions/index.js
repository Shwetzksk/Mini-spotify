function add(data) {

    return {
        type: "ADD",
        payload: data,
    }
}

function remove(data) {
    return {
        type: "DELETE",
        payload: data,
    }
}

function storeData(data) {
    return {
        type: "STORE",
        payload: data,
    }
}

function storeLocally(data) {
    return {
        type: "LOCALSTORE",
        payload: data,
    }
}

export { add, remove, storeData, storeLocally };

