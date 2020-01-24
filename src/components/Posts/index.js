import React, { useEffect, useReducer } from "react";
import postsReducer from "../../services/reducers/posts";
import fetchFromLeanCloud from "../../services/helpers";
function Posts() {
    const [{ posts }, dispatch] = useReducer(postsReducer, { posts: [] });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Posts");
    }, []);
    return (
        <div>
            <div>posts</div>
            <button onClick={() => fetchFromLeanCloud(dispatch, "Posts")}>
                click
            </button>
            {posts &&
                posts.map(post => (
                    <div key={post.id}>{post._serverData.content}</div>
                ))}
        </div>
    );
}

export default Posts;
