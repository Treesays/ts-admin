export default function postsReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_POSTS': return Object.assign({}, state, {
            posts: payload.posts
        });
        default: return state;
    }
}