import React from 'react'
import './SearchBox.css'



function Searchbox(props){
return (
    <div  className='search'>
    <input 
    type ='search'
    placeholder ='search monsters'
    onChange ={props.handleChange}
    />
    </div>
)
}

export default Searchbox