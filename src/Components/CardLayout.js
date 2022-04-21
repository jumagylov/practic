import React from 'react'
import './Card.css'
function CardLayout(props) {
  let clas = "wrapper" + props.className;
  return <div className={clas}>{props.children}</div>
  
}

export default CardLayout