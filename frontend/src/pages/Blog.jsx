import React, { useState } from 'react';
import { reviews } from '../assets/frontend_assets/assets';
import "./Blog.css";


function Blog() {

    return (
        <div className='mt-[100px] sm:mt-[120px] '>
            {reviews.map((item) => {
                return (
                    <div className='border p-3 mb-4 rounded'>
                        <h1 className='text-center text-xl'>Hostel Name- <span className='text-orange-500'>{item.hostelName}</span></h1>
                        <p className='text-xl'>Student Name:{item.studentName}</p>
                        <p className='text-gray-400'>Review:{item.review}</p>
                        <p className='text-center mt-4'>
                            {Array(item.stars).fill().map((_, i) => (
                              <span class="star full"></span>
                            ))}
                            {Array(5-item.stars).fill().map((_, i) => (
                              <span class="star empty"></span>
                            ))}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog;