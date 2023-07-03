'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import breakfastMeal1 from '../public/scrambled-egg-with-bread-toasted-bacon-breakfast.png';
import breakfastMeal2 from '../public/close-up-table-full-food.png';
import breakfastMeal3 from '../public/vertical-shot-plate-with-gourmet-pancakes-with-cream-strawberries-blueberries.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Slider = () => {

    const [images, setImages] = useState([
        { image: breakfastMeal1, h2: 'Classic American Breakfast', h4: 'Scrambled eggs, crispy bacon, toast, and hash browns.', price: '$20' },
        { image: breakfastMeal2, h2: 'Avocado Toast Deluxe', h4: 'Toasted multigrain bread topped with mashed avocado, poached eggs, and cherry tomatoes.', price: '$15' },
        { image: breakfastMeal3, h2: 'Fluffy Pancakes Stack', h4: 'Stack of fluffy pancakes served with maple syrup and fresh berries.', price: '$25' },
      ]);
    
      const handleClick = (index) => {
        if (index === 0) {
          const newImages = [
            { ...images[1] },
            { ...images[0] },
            { ...images[2] },
          ];
          setImages(newImages);
        } else if (index === 2) {
          const newImages = [
            { ...images[0] },
            { ...images[2] },
            { ...images[1] },
          ];
          setImages(newImages);
        }
      };


    return (
      
        <div>
            <div className='flex flex-col justify-center items-center h-[80vh] mt-6'>
                <h2 className='font-bold text-[39px] leading-10'>{images[1].h2}</h2> 
                <h4>{images[1].h4}</h4>
                <div className='flex justify-center items-center mt-2'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`p-4 ${index !== 1 && 'cursor-pointer'}`}
                            onClick={() => index !== 1 && handleClick(index)}
                            >
                                <div className={`transition-opacity flex items-center justify-center  duration-300 mx-[150px] w-[400px] h-[400px] ${index === 1 ? 'drop-shadow-mealShadow object-cover' : ''}`}>
                <Image src={images[index].image} alt={`Image ${index + 1}`} />
              </div>       
                        </div>
                    ))}
                </div>

                <div>
                    <div className='mt-6 flex justify-between items-center'>
                        <div className='text-[#FFB800] text-[20px]'>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                        <h2 className='font-bold text-[25px]'>{images[1].price}</h2>
                    </div>
                    <div className='mt-2'>
                        <Link href={'#'} className='bg-brandRed px-[40px] py-[10px] rounded-[8px] font-semibold text-white hover:drop-shadow-btnShadow transiduration-200 ease-in-out'>Order Now <span><FontAwesomeIcon icon={faArrowRight} className='ml-[10px]' /></span></Link>
                    </div>
                </div>
         
            </div>

          
          
        </div>
  )
}

export default Slider