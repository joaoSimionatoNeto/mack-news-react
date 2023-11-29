import React, { useState } from "react";
import "./Header.css";
import logo from "../img/logo.png";
import search from "../img/search.png";
import menuBurguer from "../img/menu-burger.png";


function Header() {
     
    const [show, showMenu] = useState(false);

    return(
        <>
            <header id="header" className={show? "change-header" : ""}>
                <div className="navbar">
                    <div className="icon" onClick={() => {showMenu(!show)}}><img src={menuBurguer} alt="" /></div>
                </div>
                <div className="search">
                    <img src={search} alt=""/>
                    <input id="search" type="text"/>
                </div>
                <div className="logo">
                    <img src={logo} />
                </div>
            </header>  
            <div id="menu" className={show? "mobile-menu nav-decoration change-nav": "mobile-menu nav-decoration"}>
                <ul>
                    <li><img src={"../SiteAssets/img/Home.png"} alt=""/> <a href={"https://www.youtube.com/watch?v=MA3Ngo32qiI"}>HOME</a></li>
                    <li><img src={"../SiteAssets/img/Group-person.png"} alt=""/><a href={"https://www.youtube.com/watch?v=MA3Ngo32qiI"}>COMUNIDADE</a></li>
                    <li><img src={"../SiteAssets/img/Pluse ellipse.png"} alt=""/><a href={"https://www.youtube.com/watch?v=MA3Ngo32qiI"}>POSTAR</a></li>
                    <li><img src={"../SiteAssets/img/Person.png"} alt=""/><a href={"https://www.youtube.com/watch?v=MA3Ngo32qiI"}>PERFIL</a></li>
                    <li className="sair"><img src={"../SiteAssets/img/sair.png"} alt=""/><a onClick={() => {showMenu(!show)}}>SAIR</a></li>
                </ul>
            </div>
        </>
        
    );
}

export default Header;