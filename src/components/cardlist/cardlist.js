import React from 'react'
import Card from '../cards/card'
import  './cardlist.css'





  function Cardlist(props) {
     
        return (
            <div className= 'card-list'>
            {props.monsters.map(monster => ( <Card key={monster.id} monster={monster}/> ) )}

            
            </div>
        )
    }



export default Cardlist