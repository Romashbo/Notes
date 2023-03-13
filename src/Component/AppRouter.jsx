import React, { useContext } from 'react'
import { Route, Routes,  } from 'react-router'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import Start from '../pages/Login'
import { PrivateRoutes, PublicRoutes } from './router/router'
import { AuthContext } from '../Context'

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)


    return (
        isAuth
            ? <Routes>
                {PrivateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact} />
                )} 
              </Routes>
            : <Routes>
                {PublicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact} />
                )} 
            </Routes>




    )
}

export default AppRouter
