const initialState = {
    currentImage: null
}
export const modalReducer= (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
               currentImage: action.payload
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                currentImage: null
            }
        default:
            return state
    }
}