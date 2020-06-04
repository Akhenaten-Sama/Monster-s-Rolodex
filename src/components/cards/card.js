import React from 'react'
import './card.css'

function Card (props){


    return (
        <div className='card-container'>
        {props.monster.name}
        <img alt ='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
                </div>
    )
    

}


export default Card