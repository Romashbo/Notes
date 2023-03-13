import PostIdPage from "../../pages/PostIdPage";
import Posts from "../../pages/Posts";

import Login from "../../pages/Login";
import { Navigate } from "react-router";


export const PrivateRoutes = [
    { path: '/posts', element: <Posts />, exact: true },
    { path: '/posts/:id', element: <PostIdPage />, exact: true },
    { path: '*', element:<Navigate to="/posts" replace />, exact: true },
]
export const PublicRoutes = [
    { path: '/login', element: <Login />, exact: true },
    // { path: '/', element: <Login />, exact: false },
    { path: '*', element:<Navigate to="/login" replace />, exact: false },
 

]