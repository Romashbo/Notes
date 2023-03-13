import React from 'react'
import MyInput from './UI/Input/MyInput'
import MySelect from './UI/Select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
    <MyInput onChange={e => setFilter({...filter, query: e.target.value})} value={filter.query } placeholder="Поиск" />
   <MySelect value={filter.sort} onChange={selectedSort => setFilter({...filter, sort: selectedSort})} defaultValue="Сортировка" options={[
    {value: "title" , name: "По названию"},
    {value: "body" , name: "По описанию"}
   ]} />
  </div>
  )
}

export default PostFilter
