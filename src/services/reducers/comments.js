export default function commentsReducer(state, action) {
    switch (action.type) {
        case "FETCH_COMMENT": {
            return { ...state, comments: action.payload };
        }
        case "FETCH_COMMENT_ERROR": {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}
