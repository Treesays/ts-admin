import postsReducer from './posts';
import commentsReducer from './comments';
import usersReducer from './users';

import { combineReducers } from 'redux';

const Reducers= combineReducers({
    postsReducer,
    commentsReducer,
    usersReducer
})
export default Reducers;