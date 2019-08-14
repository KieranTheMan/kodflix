import React from "react";
import {Link} from 'react-router-dom'

function movieItems (props) {
    return(
      <Link to= {props.id} className='item'>
           <img src={props.img} alt={props.alt}/>
           <div className='Overlay'>
              <h1>{props.name}</h1>  
           </div>
      </Link>
    );
}


  export default movieItems