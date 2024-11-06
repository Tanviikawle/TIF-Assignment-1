import React, { useState } from 'react'
import './Articles.css'
import FoodCard from '../FoodCard/FoodCard'
import Pagination from '../Pagination/Pagination'
import data from '../../data';

const Articles = () => {
    const [currPage, setCurrPage] = useState(1);
    const articlePerPage = 3
    const lastArticleIndex = currPage * articlePerPage;
    const firstArticleIndex = lastArticleIndex - articlePerPage;
    const currentArticles = data.slice(firstArticleIndex, lastArticleIndex);
    const result = currentArticles.map(el => <FoodCard title={el.title} img={el.img} desc={el.desc} key={el.id} />)

    return (
        <article className='container mb-3'>
            <h1 className='articleHeading'>Latest Articles</h1>
            <div className='row d-flex mt-5'>
                {result}
            </div>
            <Pagination setCurrPage={setCurrPage} currPage={currPage} />
        </article>
    )
}

export default Articles
