import React, { useEffect, useReducer } from "react";
import commentsReducer from "../../services/reducers/comments";
import fetchFromLeanCloud from "../../services/helpers";
function Comments() {
    const [{ comments }, dispatch] = useReducer(commentsReducer, {
        comments: []
    });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Comment");
    }, []);
    return (
        <div>
            <div>comments</div>
            <button onClick={() => fetchFromLeanCloud(dispatch, "Comment")}>
                click
            </button>
            {comments &&
                comments.map(comment => (
                    <div key={comment.id}>{comment._serverData.comment}</div>
                ))}
        </div>
    );
}
export default Comments;
