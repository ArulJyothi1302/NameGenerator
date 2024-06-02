import React from 'react'
import './Result.css'
import Namecard from '../Namecard/Namecard'


function Result({suggest}) {
   const suggestedlist=suggest.map((names,index)=>{
    return <Namecard key={index} suggests={names}/>   })
  return (
    <div className='result-container'>
    {suggestedlist} 
    </div>
  )
}

export default Result