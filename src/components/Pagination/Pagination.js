import React from 'react'
import './Pagination.css'

const Pagination = ({ setCurrPage, currPage }) => {
  return (
    <div className='paginationKeys'>
      <button className='btn pageButton' onClick={() => currPage > 1 ? setCurrPage(currPage - 1) : setCurrPage(1)} disabled={currPage === 1 ? true : false}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg></button>
      <p>{currPage}/2</p>
      <button className='btn pageButton' onClick={() => currPage < 2 ? setCurrPage(currPage + 1) : setCurrPage(2)} disabled={currPage === 2 ? true : false}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg></button>
    </div>
  )
}

export default Pagination
