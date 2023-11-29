import React from "react";
import "./PostCard.css";

function PostCard (){
    return(
    <div id="card">
        <div id="topCard">
            <div class="userInfo">
                <img src="../SiteAssets/img/Oval.svg" alt="Foto de perfil do usuário"/>
                <h4>Sara Jones</h4>
            </div>
            <div>
                <a href="">
                    <img id="icon" src="../SiteAssets/img/Chat-1.svg" alt="Icone de comentário"/>
                </a>
            </div>
        </div>
        <div>
            <p id="comunity">Comunidade: Todos os cursos</p>
            <p id="content">Conteúdo: Horas Complementares</p>
            <br/>
            <p id="info">Hoje, segunda-feira, 29, haverá...<a href="" id="readMore"><b>ler mais</b></a></p>
        </div>
    </div>  
    );
}

export default PostCard;