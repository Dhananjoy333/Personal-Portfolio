import React from 'react'
import "./content.css"
import img from "./images/p1.png"

function Content() {
  return (
    <div className='content'>
        <span className="blur"></span>
        <span className="blur"></span>
        <h3 className="greeting">Welcome to my personal portfolio</h3>
        <h1>I'm <span className='name'>Dhananjoy Kr. Brahma</span>, Web Developer</h1>
        <img src={img} alt="pic" className="side-pic" />
        <span className="blur2"></span>
        <span className="blur2"></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error quia expedita atque earum molestiae, accusantium vel excepturi aperiam eveniet velit repudiandae quae. Sapiente vero quod nihil nesciunt minima odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus illum aut, provident neque totam fugiat officiis cumque tempora obcaecati iure accusamus deleniti architecto doloribus natus nisi alias earum dolorem porro!</p>
    </div>
  )
}

export default Content;
