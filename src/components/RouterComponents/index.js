import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class FrontendAuth extends React.Component {
    render() {
        const { location: { pathname }, config } = this.props;
        const isLogin = AV.User.current() ?  AV.User.current()["attributes"]["username"] : null;
        const targetRouterConfig = config.find((route) => route.path === pathname );
        if(isLogin){
            return (pathname === '/login' || !targetRouterConfig ) ? <Redirect to='/' /> : <Route path={pathname} component={targetRouterConfig.component} />
        } else {
            return (targetRouterConfig && !targetRouterConfig.auth) ? <Route exact path={pathname} component={targetRouterConfig.component} /> : <Redirect to='/login' />
        }
    }
}
