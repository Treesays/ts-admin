import React from "react";
import { render } from "react-dom";
import Reducers from "./services/reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import usersSaga from './services/sagas/users';
import postsSaga from './services/sagas/posts';
import commentsSaga from './services/sagas/comments';
import { Provider } from "react-redux";
import { App } from "./App";
import "antd/dist/antd.css";
import "./index.css";
const appId = "E0zOYOk1h0wBAkNHwFeaS63z-gzGzoHsz";
const appKey = "fdFmkUavVqNrbP2PC6NRsRUj";
const serverURLs = "https://e0zoyok1.lc-cn-n1-shared.com";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(usersSaga);
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(commentsSaga);
AV.init({
    appId,
    appKey,
    serverURLs
});
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
