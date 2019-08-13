import React from "react";
import {Link} from 'react-router-dom'
function movieItems (props) {
    return(
    <div className="item">

        <Link to={props.name}><img src={props.img} alt= {props.alt}/></Link>
            <div className = "Overlay">
                <h1>{props.name}</h1>  
            </div>
    </div>
  );
}


  export default movieItems