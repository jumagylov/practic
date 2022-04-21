import React from 'react'
import './Card.css'
function Card(props) {

  return (
     <div>
         {props.title}
   <div className='cont'>
       
                <img className='img' src={props.pic}/>
          <div>
              {props.id} {props.username}
          </div>
          <div>
              {props.userInfo}
          </div>
          </div>
          </div>
     
   
  )
}

export default Card

