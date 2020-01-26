import React, { useEffect, useReducer } from "react";
import usersReducer from "../../services/reducers/users";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb } from "antd";
import { UsersColumnConfig } from "../../services/tables/columnConfig";
function Users() {
    const [{ users }, dispatch] = useReducer(usersReducer, { users: [] });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Users");
    }, []);
    return (
        <div>
            <div className="ts-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item><a>首 页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>用户管理</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="ts-table">
                {users && (
                    <Table
                        columns={UsersColumnConfig}
                        dataSource={users}
                        rowKey="id"
                        pagination={{
                            total: users.length,
                            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                            pageSize: 13,
                            defaultCurrent: 1,
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Users;
