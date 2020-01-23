export default function postsReducer(state, action) {
    switch (action.type) {
        case "FETCH_POSTS": {
            return { ...state, posts: action.payload };
        }
        case "FETCH_POSTS_ERROR": {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}
