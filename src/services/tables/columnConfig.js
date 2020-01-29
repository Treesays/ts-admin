import React from "react";
import { Tag } from 'antd';
import moment from 'moment';
moment.locale('zh-cn');
const commonFields = [
    {
        title: "创建时间",
        dataIndex: "createdAt",
        key: "createdAt",
        render: createdAt => moment(createdAt).toNow(),
        width: 150,
    },
    {
        title: "修改时间",
        dataIndex: "updatedAt",
        key: "updatedAt",
        render: updatedAt => moment(updatedAt).toNow(),
        width: 150,
    },
]
export const PostsColumnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "作者",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
    },
    {
        title: "类别",
        dataIndex: "attributes.category",
        key: "attributes.category",
        filters: [{text: "GeekTalk", value:"GeekTalk"}, {text: "GeekToBuy", value:"GeekToBuy"}, {text: "GeekCode", value:"GeekCode"}, {text: "GeekLove", value:"GeekLove"}],
        onFilter: (value, record) => record.attributes.category.indexOf(value) === 0,
        width: 100,
    },
    {
        title: "内容",
        dataIndex: "attributes.content",
        key: "attributes.content",
        ellipsis: true,
    },
    {
        title: "标签",
        dataIndex: "attributes.tags",
        key: "attributes.tags",
        render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 3 ? 'geekblue' : 'green';
                return (
                  <Tag color={color} key={tag}>
                    { tag }
                  </Tag>
                );
              })}
            </span>
        ),
        width: 200,
    },
    {
        title: "分享数",
        dataIndex: "attributes.shareCount",
        key: "attributes.shareCount",
        width: 90,
    },
    {
        title: "点赞数",
        dataIndex: "attributes.upCount",
        key: "attributes.upCount",
        width: 90,
    },
    ...commonFields,
];

export const UsersColumnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "用户名",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
    },
    {
        title: "邮箱",
        dataIndex: "attributes.email",
        key: "attributes.email",
        width: 200,
    },
    {
        title: "邮箱已验证",
        dataIndex: "attributes.emailVerified",
        key: "attributes.emailVerified",
        width: 100,
        render: emailVerified => emailVerified ? "是" : "否"
    },
    {
        title: "手机已验证",
        dataIndex: "attributes.mobileVerified",
        key: "attributes.mobileVerified",
        width: 100,
        render: mobileVerified => mobileVerified ? "是" : "否"
    },
    ...commonFields,
]

export const CommentsColumnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "昵称",
        dataIndex: "attributes.nick",
        key: "attributes.nick",
        width: 160,
    },
    {
        title: "邮箱",
        dataIndex: "attributes.mail",
        key: "attributes.mail",
        width: 200,
    },
    {
        title: "系统信息",
        dataIndex: "attributes.ua",
        key: "attributes.ua",
    },
    {
        title: "内容",
        dataIndex: "attributes.comment",
        key: "attributes.comment",
        ellipsis: true,
    },
    ...commonFields,
]
