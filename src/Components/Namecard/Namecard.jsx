import React from 'react'
import './Namecard.css'
const namecheapurl= "https://www.namecheap.com/domains/registration/results/?domain=%27%3B"

function Namecard({suggests}) {
   return (
    <a
    target="_blank" 
    rel="noreferrer"
    className='name-card' href={`${namecheapurl}${suggests}`}>
    <div className='result-name-card'>
        <p className='result-name'>{suggests}</p>
        </div>
        </a>
  )
}

export default Namecard