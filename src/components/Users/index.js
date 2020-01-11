import React from "react";
import { connect } from "react-redux";
import { NEED_FETCH_USERS } from "../../services/actions";
const UsersCmp = class extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        return (
            <div>
                <div>users</div>
                <button onClick={this.props.fetchUsers.bind(this)}>
                    click
                </button>
                {this.props.users &&
                    this.props.users.map(user => (
                        <div key={user.id}>{user._serverData.username}</div>
                    ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => {
            dispatch(NEED_FETCH_USERS);
        }
    };
};

const Users = connect(mapStateToProps, mapDispatchToProps)(UsersCmp);

export default Users;
