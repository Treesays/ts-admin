import React, { createContext } from "react";
import { FrontendAuth } from "./components/RouterComponents";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import { HashRouter, Switch } from "react-router-dom";
import { routerConfig } from "./routers";
import { UserName } from './components/Topbar/userNameContext';
export function App (){
        const currentUserName = AV.User.current()
            ? AV.User.current()["attributes"]["username"]
            : null;
        return (
            <HashRouter>
                <div className="flex flex-row full">
                {currentUserName && <Navbar />}
                <div className="flex flex-column full">
                {currentUserName && <UserName username={currentUserName}>
                        <Topbar />
                    </UserName>}
                    
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
