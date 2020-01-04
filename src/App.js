import React from "react";
import { FrontendAuth } from "./components/RouterComponents";
import Navbar from "./components/Navbar";
import { HashRouter, Switch } from "react-router-dom";
import { routerConfig } from "./routers";
export class App extends React.Component {
    render() {
        const currentUserName = AV.User.current()
            ? AV.User.current()["attributes"]["username"]
            : null;
        return (
            <HashRouter>
                {currentUserName && <Navbar username={currentUserName} />}
                <Switch>
                    <FrontendAuth
                        config={routerConfig}
                        isAuthed={currentUserName}
                    />
                </Switch>
                {currentUserName && <footer>2019 Powered by Jack Li</footer>}
            </HashRouter>
        );
    }
}
