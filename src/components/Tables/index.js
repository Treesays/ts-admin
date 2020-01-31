import React, { useState, useEffect, useReducer } from "react";
import usersReducer from "../../services/reducers/users";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb, Checkbox } from "antd";
import { UsersColumnConfig } from "../../services/tables/columnConfig";
const CheckboxGroup = Checkbox.Group;
const fixedColumnSets = UsersColumnConfig.filter(
    columnSetting => columnSetting.key === "attributes.username"
);
const selectableColumnSets = UsersColumnConfig.filter(
    columnSetting => columnSetting.key !== "attributes.username"
);
const optionSets = [
    {
        label: "id",
        value: "id"
    },
    {
        label: "邮箱",
        value: "attributes.email"
    },
    {
        label: "邮箱已验证",
        value: "attributes.emailVerified"
    },
    {
        label: "手机已验证",
        value: "attributes.mobileVerified"
    },
    {
        label: "创建时间",
        value: "createdAt"
    },
    {
        label: "修改时间",
        value: "updatedAt"
    }
];

function Tables(props) {
    // TODO: get props from router cmp, refactor this later
    const [columnSettings, setColumnSettings] = useState(UsersColumnConfig);
    const [usersData, setUsersData] = useState([]);
    function onColumnSelectionChange(checkedValues) {
        let columnConfig = [...fixedColumnSets];
        selectableColumnSets.forEach(selectableColumn => {
            checkedValues.forEach(selectedValue => {
                if (selectableColumn.key === selectedValue) {
                    columnConfig.push(selectableColumn);
                }
            });
        });
        setColumnSettings(columnConfig);
    }
    const [{ users }, dispatch] = useReducer(usersReducer, { users: [] });
    useEffect(() => {
        fetchFromLeanCloud("Users").then(_users => {
            dispatch({ type: "FETCH_USERS", payload: _users });
            setUsersData(_users);
        });
    }, []);
    return (
        <div>
            <div className="ts-table-headbar">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a>首 页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a>用户管理</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <CheckboxGroup
                    options={optionSets}
                    defaultValue={[
                        "id",
                        "attributes.email",
                        "attributes.emailVerified",
                        "attributes.mobileVerified",
                        "createdAt",
                        "updatedAt"
                    ]}
                    onChange={onColumnSelectionChange}
                />
            </div>
            <div className="ts-table">
                {usersData && (
                    <Table
                        columns={columnSettings}
                        dataSource={usersData}
                        rowKey="id"
                        pagination={{
                            total: usersData.length,
                            showTotal: (total, range) =>
                                `${range[0]}-${range[1]} of ${total} items`,
                            pageSize: 13,
                            defaultCurrent: 1
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Tables;