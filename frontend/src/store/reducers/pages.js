const initialState = {
    pages: null,
}


const reducer = (state = initialState, action) => {
    if (action.type === "SET_PAGES") {
        return {
            ...state,
            pages: action.pages
        }

    }
    return state;
};


export default reducer;