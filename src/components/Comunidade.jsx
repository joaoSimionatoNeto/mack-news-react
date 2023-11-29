import React from "react";
import "./Comunidade.css";
function Comunidade ({link, img, name}){
    return(
        <a href={link}>
        <div className="card">
            <img src={img} alt=""/>
            <p class="title">{name}</p>
        </div>
    </a>
    );
}

export default Comunidade;