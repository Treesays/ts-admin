import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./index.css";
const appId = 'E0zOYOk1h0wBAkNHwFeaS63z-gzGzoHsz';
const appKey = 'fdFmkUavVqNrbP2PC6NRsRUj';
const serverURLs = 'https://e0zoyok1.lc-cn-n1-shared.com';
AV.init({
  appId,
  appKey,
  serverURLs
})
render(<App />, document.getElementById("root"));
