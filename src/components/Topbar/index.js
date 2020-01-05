import React from "react";
import { Menu, Icon } from 'antd';
const logo = require("../../assets/treesays.png");
function Topbar(props) {
    return (
        <Menu mode="horizontal" theme="dark" className="flex flex-row-end">
            <Menu.Item>
            { props.username }
            </Menu.Item>
            <Menu.Item>
                登 出
            </Menu.Item>
        </Menu>
    );
}
export default Topbar;
