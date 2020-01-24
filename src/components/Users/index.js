import React, { useEffect, useReducer } from "react";
import usersReducer from "../../services/reducers/users";
import fetchFromLeanCloud from "../../services/helpers";
function Users() {
    const [{ users }, dispatch] = useReducer(usersReducer, { users: [] });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Users");
    }, []);
    return (
        <div>
            <div>users</div>
            <button onClick={() => fetchFromLeanCloud(dispatch, "Users")}>
                click
            </button>
            {users &&
                users.map(user => (
                    <div key={user.id}>{user._serverData.username}</div>
                ))}
        </div>
    );
}

export default Users;
