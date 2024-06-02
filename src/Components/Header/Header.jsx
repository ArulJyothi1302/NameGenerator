import React from 'react'
import './Header.css'
import image from './image/undraw_writer_q06d.png'

const Header=({title,headerExpand})=>{
    
return(
    <div className='head-container'>
        <img src={image}className=
        {`header-image ${headerExpand ?'head-image-expanded':'head-image-contraced'}`}
        alt="search"/>
        <h1 className={`head-text ${headerExpand ? 'text-expand':'text-contract'}`}>{title}</h1>
    </div>
)
}
export default Header