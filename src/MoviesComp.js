import React from "react";


function movieItems (props) {
    return(
    <div className = "item">
        <img src={props.img} alt= {props.alt} />
            <div className = "Overlay">
                <h1>{props.name}</h1>  
            </div>
    </div>
  );
}


  export default movieItems