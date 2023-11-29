import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home () {
    return(
        <main className="main">
        <section id="inicio">
          <div className="container">
            <img id="imagem" src="./SiteAssets/img/logo.PNG" alt="Logo Mack News"/>
            <p>PENSADO PARA VOCÊ, MACKENZISTA, FICAR POR DENTRO DAS NOVIDADES.</p>
          </div>
          <div className="container">
            <Link to={"/login"}><button>ENTRAR</button></Link>
            <Link to={"/singup"}><button>CADASTRAR</button></Link>
          </div>
        </section>
      </main>
    );
}

export default Home;
