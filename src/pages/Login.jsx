import React, { useContext, useState } from 'react'
import MyButton from '../Component/UI/Button/MyButton'
import MyInput from '../Component/UI/Input/MyInput'
import { AuthContext } from '../Context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [log, setLog] = useState("")
  const [pass, setPass] = useState("")

const login = (e) => {
  e.preventDefault();
  if (log === "1111" && pass === "1111") {
    setIsAuth(true)
  } {}
}

  return (


    <div className='login' onSubmit={login}>

      <form className='login__content'>
        <h3 style={{ padding: '10px' }}>Авторизация</h3>
        <MyInput onChange={(event) => setLog(event.target.value)} type="text" placeholder='Введите логин 1111' />
        <MyInput onChange={(event) => setPass(event.target.value)} type="password" placeholder='Введите пароль 1111' />
        <MyButton>Войти</MyButton>
      </form>

    </div>
  )
}

export default Login
