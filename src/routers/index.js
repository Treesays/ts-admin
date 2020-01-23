import Comments from "../components/Comments";
import Posts from "../components/Posts";
import Users from "../components/Users";
import Login from "../components/Login";
export const routerConfig =  [
    { path: "/login", name: "Login", component: Login },
    { path: "/", name: "App", component: Posts, auth: true },
    { path: "/comments", name: "Comments", component: Comments, auth: true },
    // { path: "/posts", name: "Posts", component: Posts, auth: true },
    // { path: "/users", name: "Users", component: Users, auth: true }
];
