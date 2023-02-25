const initialState = [
    'My home playList',
    'My work playList'
]

export default function playList(state = initialState, action) {
    if (action.type === "ADD_PLAYLIST") {
        return state;
    }else if (action.type === "REMOVE_PLAYLIST") {
        return state;
    }
    return state;
}