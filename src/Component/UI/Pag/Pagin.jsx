import React from 'react'
import { getPagesArray } from '../../calc/pages'

const Pagin = ({totalPage, page, changePage}) => {
    let pagesArray = getPagesArray(totalPage)
  return (
    <div className="page__wrapper">
    {pagesArray.map(p =>
      <span onClick={() => changePage(p)} key={p} className={page === p ? "page page__current" : "page"}>{p}</span>
    )}
  </div>
  )
}

export default Pagin
