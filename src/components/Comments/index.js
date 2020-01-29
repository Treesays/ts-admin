import React, { useState, useEffect, useReducer } from "react";
import commentsReducer from "../../services/reducers/comments";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb, Checkbox } from "antd";
import { CommentsColumnConfig } from "../../services/tables/columnConfig";
const CheckboxGroup = Checkbox.Group;
const fixedColumnSets = CommentsColumnConfig.filter((columnSetting)=> columnSetting.key === "attributes.nick");
const selectableColumnSets = CommentsColumnConfig.filter((columnSetting)=> columnSetting.key !== "attributes.nick");
const optionSets = [
    {
        label: "id",
        value: "id",
    },
    {
        label: "邮箱",
        value: "attributes.mail",
    },
    {
        label: "系统信息",
        value: "attributes.ua",
    },
    {
        label: "内容",
        value: "attributes.comment",
    },
    {
        label: "创建时间",
        value: "createdAt",
    },
    {
        label: "修改时间",
        value: "updatedAt",
    },
]
function Comments() {
    const [ columnSettings, setColumnSettings] = useState(CommentsColumnConfig);
    function onColumnSelectionChange (checkedValues) {
        let columnConfig = [...fixedColumnSets];
        selectableColumnSets.forEach((selectableColumn)=>{
            checkedValues.forEach(selectedValue=>{
              if(selectableColumn.key === selectedValue){
                columnConfig.push(selectableColumn)
              }
            })
          })
          setColumnSettings(columnConfig);
    };
    const [{ comments }, dispatch] = useReducer(commentsReducer, {
        comments: []
    });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Comment");
    }, []);
    return (
        <div>
            <div className="ts-table-headbar">
                <Breadcrumb>
                    <Breadcrumb.Item><a>首 页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>评论管理</a></Breadcrumb.Item>
                </Breadcrumb>
                <CheckboxGroup options={optionSets} defaultValue={["id", "attributes.mail", "attributes.ua", "attributes.comment", "createdAt", "updatedAt" ]} onChange={onColumnSelectionChange} />
            </div>
            <div className="ts-table">
                {comments && (
                    <Table
                        columns={columnSettings}
                        dataSource={comments}
                        rowKey="id"
                        pagination={{
                            total: comments.length,
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
export default Comments;
