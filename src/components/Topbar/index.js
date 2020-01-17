import React, { useContext } from "react";
import { Menu, message } from 'antd';
import { UserNameContext } from './userNameContext';
function Topbar(props) {
    async function tryLogOut() {
        try {
            const response = await AV.User.logOut();
            message.success('登出成功');
            setTimeout(() => {history.go(0)}, 1000);
        } catch (_) {
            message.error('登出失败, 请检查网络');
        }
       

    }
    return (
        <Menu mode="horizontal" theme="dark" className="flex flex-row-end">
            <Menu.Item>
            { useContext(UserNameContext) }
            </Menu.Item>
            <Menu.Item>
                <span onClick={tryLogOut}>登 出</span>
            </Menu.Item>
        </Menu>
    );
}
export default Topbar;
