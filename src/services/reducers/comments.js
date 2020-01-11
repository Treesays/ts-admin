export default function commentsReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_COMMENTS': return Object.assign({}, state, {
            comments: payload.comments
        });
        default: return state;
    }
}
