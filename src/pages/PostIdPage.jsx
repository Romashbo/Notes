import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../Component/hooks/useFetching'
import MyButton from '../Component/UI/Button/MyButton'
import Loader from '../Component/UI/Loader/Loader'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, postLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
        
    })
    useEffect(() => {
        fetchPostById(params.id)
    }, [])
    return (
        <div className='postIdPage'>
            <div style={{display:"flex" ,justifyContent:"flex-end", margin:"10px"}}>
           <MyButton>
            <Link style={{textDecoration:'none', color:"black"}} to="/posts">Back</Link>
            </MyButton> 
            </div>
            
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {postLoading
                ? <Loader />
                :
                <div>
                    <p>{post.id}.</p> <h4>{post.title} </h4>
                    <hr />
                    <div className="postIdContent">{post.body}
                    </div>
                </div>
                
            }

        </div>
    )
}

export default PostIdPage
