import React from 'react'
import './FoodCard.css'

const FoodCard = ({ title, img, desc }) => {
    return (
        <div className='col-lg-4'>
            <div className="card px-3 py-4 mx-2">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body mt-3">
                    <h5 className="card-title mb-3">{title}</h5>
                    <p className="card-text desc ">{desc}</p>
                    <button className="btn btn-outline-dark rounded px-4 mt-3">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
