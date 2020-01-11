export const NEED_FETCH_USERS = {
    type: "NEED_FETCH_USERS"
};

export const FETCH_USERS = users => {
    return {
        type: "FETCH_USERS",
        payload: users
    };
};

export const FETCH_USERS_ERROR = error => {
    return {
        type: "FETCH_USERS_ERROR",
        payload: error
    };
};

export const NEED_FETCH_POSTS = {
    type: "NEED_FETCH_POSTS"
};

export const FETCH_POSTS = posts => {
    return {
        type: "FETCH_POSTS",
        payload: posts
    };
};

export const FETCH_POSTS_ERROR = error => {
    return {
        type: "FETCH_POSTS_ERROR",
        payload: error
    };
};

export const NEED_FETCH_COMMENTS = {
    type: "NEED_FETCH_COMMENTS"
};

export const FETCH_COMMENTS = comments => {
    return {
        type: "FETCH_COMMENTS",
        payload: comments
    };
};

export const FETCH_COMMENTS_ERROR = error => {
    return {
        type: "FETCH_COMMENTS_ERROR",
        payload: error
    };
};
