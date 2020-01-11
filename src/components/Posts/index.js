import React from "react";
import { connect } from "react-redux";
import { NEED_FETCH_POSTS } from "../../services/actions";
const PostsCmp = class extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <div>posts</div>
                <button onClick={this.props.fetchPosts.bind(this)}>
                    click
                </button>
                {this.props.posts &&
                    this.props.posts.map(post => (
                        <div key={post.id}>{post._serverData.content}</div>
                    ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => {
            dispatch(NEED_FETCH_POSTS);
        }
    };
};

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsCmp);

export default Posts;
