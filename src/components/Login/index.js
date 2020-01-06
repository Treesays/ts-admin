import React, { useState } from "react";
import { Input, Button, message } from 'antd';
import useReactRouter from 'use-react-router';
const logo = require("../../assets/rice.png");
function Login() {
    const { history } = useReactRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function tryLogin(email, password) {
        try {
            const response = await AV.User.loginWithEmail(email, password);
            if (response.id !== null) {
                messsage.success('登录成功');
              setTimeout(() => {history.go(0)}, 1000);
            }
          } catch(error) {
            message.error('登录失败, 请检查用户名和密码是否匹配。如持续出现，请检查网络');
          }
    }

    return (
        <div className="login">
          <img className="login-cmp" src={logo} height="38" alt="logo" />
          <Input className="login-cmp" name="email" placeholder="输入用户名" onChange={(e) => { setEmail(e.target.value) }} />
          <Input.Password className="login-cmp" name="password" placeholder="输入密码" onChange={(e) => { setPassword(e.target.value) }}  onPressEnter={() => tryLogin(email, password) } />
          <Button className="login-cmp"disabled={!(email && password)} type="primary" onClick={() => tryLogin(email, password)} block>登 录</Button>
        </div>
    )
}

export default Login;
