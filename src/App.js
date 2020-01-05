import React from "react";
import { FrontendAuth } from "./components/RouterComponents";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import { HashRouter, Switch } from "react-router-dom";
import { routerConfig } from "./routers";
export class App extends React.Component {
    render() {
        const currentUserName = AV.User.current()
            ? AV.User.current()["attributes"]["username"]
            : null;
        return (
            <HashRouter>
                <div className="flex flex-row full">
                {currentUserName && <Navbar />}
                <div className="flex flex-column full">
                    {currentUserName && <Topbar username={currentUserName} />}
                    <Switch>
                        <FrontendAuth
                            config={routerConfig}
                            isAuthed={currentUserName}
                        />
                    </Switch>
                </div>
                </div>
            </HashRouter>
        );
    }
}
