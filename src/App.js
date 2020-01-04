import React from "react";
import { FrontendAuth }  from './components/RouterComponents';
import {
    HashRouter,
    Switch,
} from "react-router-dom";
import { routerConfig } from "./routers";
export class App extends React.Component{
  render(){
      return(
          <HashRouter>
              <Switch>
                  <FrontendAuth config={routerConfig} />
              </Switch>
          </HashRouter>
      );
  }
}
