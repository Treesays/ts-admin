export default function usersReducer(state = [], action) {
    switch (action.type) {
        case "FETCH_USERS": {
            return { ...state, users: action.payload };
        }
        case "FETCH_USERS_ERROR": {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}
