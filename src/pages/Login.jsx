import React, { useContext, useState } from 'react'
import MyButton from '../Component/UI/Button/MyButton'
import MyInput from '../Component/UI/Input/MyInput'
import { AuthContext } from '../Context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [log, setLog] = useState("")
  const [pass, setPass] = useState("")

  const login = event => {
    event.preventDefault();
    setIsAuth(true)

  }

  return (


    <div className='login'>

      <form className='login__content' onSubmit={login}>
        <h3 style={{ padding: '10px' }}>Авторизация</h3>
        <MyInput onChange={(event) => setLog(event.target.value)} type="text" placeholder='Введите логин' />
        <MyInput onChange={(event) => setPass(event.target.value)} type="password" placeholder='Введите пароль' />
        <MyButton>Войти</MyButton>
      </form>

    </div>




  )
}

export default Login
