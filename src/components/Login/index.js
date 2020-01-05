import React, { useState } from "react";
import { Input, Button } from 'antd';
import useReactRouter from 'use-react-router';
function Login() {
    const { history } = useReactRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function tryLogin(email, password) {
        try {
            const response = await AV.User.loginWithEmail(email, password);
            if (response.id !== null) {
                console.log('登录成功', response.id);
              setTimeout(() => {history.go(0)}, 1000);
            }
          } catch(error) {
            console.log(error);
          }
    }

    return (
        <div class="login">
        <Input name="email" placeholder="输入用户名" onChange={(e) => { setEmail(e.target.value) }} />
        <Input.Password name="password" placeholder="输入密码" onChange={(e) => { setPassword(e.target.value) }}  onPressEnter={() => tryLogin(email, password) } />
        <Button type="primary" onClick={() => tryLogin(email, password)} block>登 录</Button>
        </div>
    )
}

export default Login;
