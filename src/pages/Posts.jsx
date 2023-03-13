import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getPage } from "../Component/calc/pages";
import { useFetching } from "../Component/hooks/useFetching";
import {usePosts} from "../Component/hooks/usePost"
import MyButton from "../Component/UI/Button/MyButton";
import MyModal from "../Component/UI/MyModal/MyModal"
import FormPost from "../Component/FormPost"
import Loader from "../Component/UI/Loader/Loader"
import PostService from "../API/PostService";
import PostFilter from "../Component/PostFilter"
import PostList from "../Component/PostList"
import Pagin from "../Component/UI/Pag/Pagin"



function Posts() {

  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const searchAndSorted = usePosts(posts, filter.sort, filter.query)
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  

  const [fetchPosts, postLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = (response.headers['x-total-count']);
    setTotalPage(getPage(totalCount, limit))
    ;
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  useEffect(() => {
    fetchPosts()
  }, [page])

  const changePage = (page) => {
    setPage(page )
    
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "20px" }} onClick={setModal}>New post</MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <FormPost create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {postLoading
        ? <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={searchAndSorted} title="Заметки" />}
 <Pagin page={page} totalPage={totalPage} changePage={changePage} />    
    </div>
  );
}

export default Posts;
