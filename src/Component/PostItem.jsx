import React from 'react'
import MyButton from './UI/Button/MyButton'
import {useNavigate} from "react-router-dom"


const PostItem = (props) => {
    const router = useNavigate()
   
    function handleClick () {
        router(`/posts/${props.post.id}`)
    }
   
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div style={{width:"500px"}}>{props.post.body}</div>
                </div>
                <div className="post__btn">
                    <MyButton onClick={handleClick} style={{marginRight: "20px"}}>Open</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem
