import axios from "axios";
import React, { useState } from "react";
import "./styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Start from "./pages/Login";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import AppRouter from "./Component/AppRouter";
import { AuthContext } from "./Context";


function App() {
const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
