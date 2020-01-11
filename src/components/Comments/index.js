import React from "react";
import { connect } from "react-redux";
import { NEED_FETCH_COMMENTS } from "../../services/actions";
const CommentsCmp = class extends React.Component {
    componentDidMount() {
        this.props.fetchComments();
    }
    render() {
        return (
            <div>
                <div>comments</div>
                <button onClick={this.props.fetchComments.bind(this)}>
                    click
                </button>
                {this.props.comments &&
                    this.props.comments.map(comment => (
                        <div key={comment.id}>
                            {comment._serverData.comment}
                        </div>
                    ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        comments: state.commentsReducer.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => {
            dispatch(NEED_FETCH_COMMENTS);
        }
    };
};

const Comments = connect(mapStateToProps, mapDispatchToProps)(CommentsCmp);

export default Comments;
