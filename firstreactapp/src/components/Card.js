import React from 'react'
import './card.css'

function Card({title,imageUrl,body}) {
  return (
    // <div className='card-container'>
    //     rahul
    //   <div className = 'imageContainer'>
    //     <img src={imageUrl} alt = '' />
    //   </div>
    //     <div className='card-title'>
    //         <h3>{title}</h3>
    //     </div>
    //     <div className='card-body'>
    //         <p>{body}</p>
    //     </div>
    // </div>
    <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='Nothing'/>
            </div>
            <div className='card-title'>
                    <h3>{title}</h3>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
    </div>
    )
}

export default Card
