import React from "react";
import { Tag } from 'antd';
import moment from 'moment';
moment.locale('zh-cn')
export const PostsColumnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
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
        title: "作者",
        dataIndex: "attributes.username",
        key: "attributes.username",
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
];

export const UsersColumnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "邮箱",
        dataIndex: "attributes.email",
        key: "attributes.email",
        width: 200,
    },
    {
        title: "用户名",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
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
]
// Comments data structure
// attributes:
// nick: "周周"
// mail: "chinajoy12@gmail.com"
// ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0"
// insertedAt: Sat Dec 07 2019 10:20:41 GMT+0800 (中国标准时间) {}
// link: ""
// comment: "<p>这是第一条数据</p>↵"
// url: "/"
// __proto__: Object
// _hashedJSON: {insertedAt: ""2019-12-07T02:20:41.150Z""}
// _escapedAttributes: {}
// cid: "c169"
// changed: {}
// _silent: {}
// _pending: {}
// _hasData: true
// _previousAttributes: {}
// id: "5deb0c7921b47e0068aa2cbb"
// createdAt: Sat Dec 07 2019 10:20:41 GMT+0800 (中国标准时间) {}
// updatedAt: Sat Dec 07 2019 10:20:41 GMT+0800 (中国标准时间) {}



// Users data structure

// attributes:
// email: "1227495160@qq.com"
// username: "lilylin"
// emailVerified: false
// mobilePhoneVerified: false
// __proto__: Object
// _hashedJSON: {}
// _escapedAttributes: {}
// cid: "c71"
// changed: {}
// _silent: {}
// _pending: {}
// _hasData: true
// _previousAttributes: {}
// id: "5e2b9e6edd3c13006a475505"
// createdAt: Sat Jan 25 2020 09:48:30 GMT+0800 (中国标准时间) {}
// updatedAt: Sat Jan 25 2020 09:48:30 GMT+0800 (中国标准时间) {}

// Posts data structure

// attributes:
// category: "GeekTalk"
// tags: ["内部测试"]
// shareCount: 0
// content: "<p>（九1－7）－－耶和华神的手加在埃及田间牲畜身上，就是在马、驴、骆驼、牛群、羊群上，发生重重的瘟疫，几乎都死了。只是以色列人的牲畜分别出来，一样都没有死。法老打发人去看，事实确是如此，但他的心却固执，仍不容许百姓离去。然而这事显见牲畜的生死也在耶和华的手中，何况我们人的生命存留，岂不是都在神的掌握之中么（诗卅六6，太十29，徒十七28）？可是法老竟不自觉，该是何等的愚昧啊！</p>"
// username: "周周"
// avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
// position: "前端开发工程师"
// upCount: 0
// workplace: "蚂蚁金服"
// __proto__: Object
// _hashedJSON: {tags: "["内部测试"]"}
// _escapedAttributes: {}
// cid: "c2"
// changed: {}
// _silent: {}
// _pending: {}
// _hasData: true
// _previousAttributes: {}
// id: "5e2985b121b47e00709f6148"
// createdAt: Thu Jan 23 2020 19:38:25 GMT+0800 (中国标准时间) {}
// updatedAt: Thu Jan 23 2020 19:38:25 GMT+0800 (中国标准时间) {}


