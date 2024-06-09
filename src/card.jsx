import React from 'react'
import "./card.css"
import data from "./card-content.jsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className='card'>
    <Slider {...settings}>
        {data.map((d)=>(
            <div className='inner'>
                <div className='image'>
                    <img src={d.img} className='card-img' alt="" />
                </div>
                <div className='game-name'>
                    <h1 className='card-name'>{d.name}</h1>
                    <button className='card-button'>Know More</button>
                </div>
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default Card;