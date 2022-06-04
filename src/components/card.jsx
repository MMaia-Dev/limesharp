import React, { useState } from "react"
import '../css/card.css'
var i = require('../images/i.png');

const Card = ({limit,text}) => {

    
    const [isReadMoreShown, setReadMoreShown] = useState(false)
    const [isSelected, setSelected] = useState(false)

    const toggleBtn = () =>{
        setReadMoreShown(prevState => !prevState)
    }
    
    const selected = () =>{
        setSelected(prevState => !prevState)
              
    }

    let cards = "unselected"
    if(isSelected){
        cards = "selected";
    }

    let textClass = "closed";
    if(isReadMoreShown){
        textClass = "open";
    }

    return (
        <div className="card" onClick={selected}  >            
            <img className="image" src={i} alt="i-letter"></img>
            <div className={cards}>            
                <div className="badge"></div>
                <h3 className="block" >BLOCK</h3>
                <p className={textClass}>{isReadMoreShown ? text : text.substr(0, limit)}</p>
                <span onClick={toggleBtn} className="btn-expand-more">{isReadMoreShown ? '-' : '+' }</span>             
            </div>
        </div>
    )}    

export default Card;