import React, { useState } from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/Input/MyInput'

const FormPost = ({create}) => {
    const [post, setPost] = useState({title: "", body:""})

    const addNewPost = (e) => {
        e.preventDefault()
      const newPost = {
        ...post, id:Date.now()
      }
      create(newPost)
        setPost({title: "", body:""})
      }
  return (
    <div>
           <form>
        <MyInput
          value={post.title}
          type="text"
          placeholder="Название поста"
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput value={post.body}
         onChange={e => setPost({...post, body: e.target.value})}
          type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
    </div>
  )
}

export default FormPost
