import React from "react";
import "./singup.css"
function Singup (){
    return(
      <main>
      <section >
        <div>
          <img id="imagem" src="../SiteAssets/img/logo.PNG" alt="Logo Mack News"/>
        </div>
        <div >
          <h3>CADASTRAR</h3>
        </div>
        <form>
          <fieldset>
            <p>
              <label for="nome">Nome de usuário</label><br />
              <input type="name" id="nome" name="nome" />
            </p>
            <p>
              <label for="email">Email Mackenzista</label><br />
              <input type="email" id="email" name="email" />
            </p>
            <p>
              <label for="campus">Campus</label><br />
              <select name="time">
                <option value=""></option>
                <option value="Higienópolis">Higienópolis</option>
                <option value="Alphaville">Alphaville</option>
                <option value="Campinas">Campinas</option>
              </select>
            </p>
            <p>
              <label for="password">Senha</label><br />
              <input type="password" id="password" name="password"/>
            </p>
            <p>
              <label for="password">Confirmar Senha</label><br />
              <input type="password" id="password" name="password"/>
            </p>
            <p>
              <a href="./feed.html">
                <button type="button" id="cadastrar" name="cadastrar" value="CADASTRAR">CADASTRAR</button>
              </a>
            </p>
  
          </fieldset>
        </form>
      </section>
    </main>
    );
}
   
export default Singup;