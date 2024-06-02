import React from 'react'
import './SearchBox.css'
function SearchBox({onInputChange}){
   
    return(<div className='search-container'>
    <input onChange={(e)=>onInputChange(e.target.value)} type="text" placeholder='Type Keywords' className='search-input'/>
    </div>)
}
export default SearchBox