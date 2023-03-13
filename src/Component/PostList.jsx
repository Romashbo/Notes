import React from 'react'
import PostItem from './PostItem'
import {CSSTransition, TransitionGroup} from "react-transition-group"

const PostList = ({ posts, title, remove }) => {

if (!posts.length) {
    return(
     <h3 style={{textAlign:"center"}}>Заметок нет</h3> 
     )
}
    return (
        <div>
            <h2 style={{ textAlign: `center` }}>{title}</h2>
            <TransitionGroup>
            {posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              
              timeout={500}
              classNames="post"
            >
             <PostItem remove={remove} number={index + 1} post={post}  />
</CSSTransition>
    )}
            </TransitionGroup>
        </div>
    )
}

export default PostList
