import React, { useState, useEffect, useReducer } from "react";
import postsReducer from "../../services/reducers/posts";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb, Checkbox } from "antd";
import { PostsColumnConfig } from "../../services/tables/columnConfig";
const CheckboxGroup = Checkbox.Group;
const fixedColumnSets = PostsColumnConfig.filter((columnSetting)=> columnSetting.key === "attributes.username");
const selectableColumnSets = PostsColumnConfig.filter((columnSetting)=> columnSetting.key !== "attributes.username");
const optionSets = [
    {
        label: "id",
        value: "id",
    },
    {
        label: "类别",
        value: "attributes.category",
    },
    {
        label: "内容",
        value: "attributes.content",
    },
    {
        label: "标签",
        value: "attributes.tags",
    },
    {
        label: "分享数",
        value: "attributes.shareCount",
    },
    {
        label: "点赞数",
        value: "attributes.upCount",
    },
    {
        label: "创建时间",
        value: "createdAt",
    },
    {
        label: "修改时间",
        value: "updatedAt",
    },
];
function Posts() {
    const [{ posts }, dispatch] = useReducer(postsReducer, { posts: [] });
    const [ columnSettings, setColumnSettings] = useState(PostsColumnConfig);
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
    function onTableChange (pagination, filters, sorter, extra) {
        const { currentDataSource } = extra;
        dispatch({type: 'FETCH_POSTS', payload: currentDataSource});
    }
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Posts");
    }, []);
    return (
        <div>
            <div className="ts-table-headbar">
                <Breadcrumb>
                    <Breadcrumb.Item><a>首 页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>帖子管理</a></Breadcrumb.Item>
                </Breadcrumb>
                <CheckboxGroup options={optionSets} defaultValue={["id", "attributes.category", "attributes.content", "attributes.tags", "attributes.shareCount", "attributes.upCount", "createdAt", "updatedAt" ]} onChange={onColumnSelectionChange} />
            </div>
            <div className="ts-table">
                {posts && (
                    <Table
                        onChange={onTableChange}
                        columns={columnSettings}
                        dataSource={posts}
                        rowKey="id"
                        pagination={{
                            total: posts.length,
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

export default Posts;
