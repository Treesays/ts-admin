import React, { useEffect, useReducer } from "react";
import postsReducer from "../../services/reducers/posts";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb } from "antd";
import { PostsColumnConfig } from "../../services/tables/columnConfig";
function Posts() {
    const [{ posts }, dispatch] = useReducer(postsReducer, { posts: [] });
    useEffect(() => {
        fetchFromLeanCloud(dispatch, "Posts");
    }, []);
    return (
        <div>
            <div className="ts-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item><a>首 页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>帖子管理</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="ts-table">
                {posts && (
                    <Table
                        columns={PostsColumnConfig}
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
