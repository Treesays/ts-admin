import React, { useEffect, useReducer } from "react";
import postsReducer from "../../services/reducers/posts";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb } from "antd";
import { PostColumnConfig } from "../../services/tables/columnConfig";
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
                        columns={PostColumnConfig}
                        dataSource={posts}
                        rowKey="id"
                    />
                )}
                {posts && posts.map((post)=>console.log(post))}
            </div>
        </div>
    );
}

export default Posts;
