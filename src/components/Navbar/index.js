import React, { useState }  from "react";
import { Menu, Icon } from 'antd';
const logo = require("../../assets/rice.png");
import useReactRouter from 'use-react-router';
function Navbar(props) {
    const { history,location } = useReactRouter();

    function getNameFromPath (path) {
        return path === '/' ? 'posts': path.replace(/\//g, '');
    }

    return (
        <Menu style={{ width: 90 }} selectedKeys={getNameFromPath(location.pathname)} mode="vertical" theme="dark">
            <Menu.Item style={{ height: 48, textAlign: "center" }} >
                <img src={logo} height="38" alt="logo" />
            </Menu.Item>
            <Menu.Item key="posts" onClick={() => history.push('posts')}>
            <Icon type="audit" />
                帖子
            </Menu.Item>
            <Menu.Item key="comments" onClick={() => history.push('comments')}>
            <Icon type="bars" />
                评论
            </Menu.Item>
            <Menu.Item key="users" onClick={() => history.push('users')}>
            <Icon type="user" />
                用户
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;