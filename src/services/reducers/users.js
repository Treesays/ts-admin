export default function usersReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_USERS': return Object.assign({}, state, {
            users: payload.users
        });
        default: return state;
    }
}