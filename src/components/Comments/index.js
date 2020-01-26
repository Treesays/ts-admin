import React, { useEffect, useReducer } from "react";
import commentsReducer from "../../services/reducers/comments";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb } from "antd";
import { CommentsColumnConfig } from "../../services/tables/columnConfig";
function Comments() {
    const [{ comments }, dispatch] = useReducer(commentsReducer, {
        comments: []
    });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Comment");
    }, []);
    return (
        <div>
            <div className="ts-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item><a>首 页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>评论管理</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="ts-table">
                {comments && (
                    <Table
                        columns={CommentsColumnConfig}
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
