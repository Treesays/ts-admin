import React, { useState }  from "react";
import { Menu, Icon } from 'antd';
const logo = require("../../assets/rice.png");
const handleClick = e => {
    console.log('click ', e);
    // this.setState({
    //   current: e.key,
    // });
  };
function Navbar(props) {
    return (
        <Menu style={{ width: 90 }} selectedKeys={['posts']} mode="vertical" theme="dark">
            <Menu.Item style={{ height: 48, textAlign: "center" }}>
                <img src={logo} height="38" alt="logo" />
            </Menu.Item>
            <Menu.Item key="posts">
            <Icon type="audit" />
                帖子
            </Menu.Item>
            <Menu.Item key="comments">
            <Icon type="bars" />
                评论
            </Menu.Item>
            <Menu.Item key="users">
            <Icon type="user" />
                用户
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;