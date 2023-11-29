import React from "react";
import "./login.css";
import { login } from "../Class/User.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login (){
  const navigate = useNavigate()

  const goHome = () => {
    navigate("/feed/all")
  }

    return(
        <main className="mainLogin">
        <section id="login">
          <div className="containerImg">
            <img id="imagem" src="../SiteAssets/img/logo.PNG" alt="Logo Mack News" />
          </div>
            <h3>ENTRAR</h3>
            <fieldset>
              <p>
                <label for="email">Email Mackenzista</label><br />
                <input type="email" id="email" name="email" />
              </p>
              <p>
                <label for="password">Senha</label><br />
                <input type="password" id="password" name="password"/>
              </p>
              <a href="#">Esqueceu a senha? Clique aqui.</a>
              <p>
                  <button id="entrar" name="entrar" onClick={
                    () => {
                      const emailInput = document.querySelector("input[name='email']");
                      const passwordInput = document.querySelector("input[name='password']");
                      const user = login(emailInput.value, passwordInput.value);
                      if(user){
                        console.log("entrou");
                        goHome();
                      }else{
                        console.log("nao entrou");
                      }
                      
                    }
                  }>ENTRAR</button>
              </p>
              <p> Não possui uma conta? <Link to={"/singup"}> Cadastre aqui. </Link>
              </p>
            </fieldset>
        </section>
      </main>
    );
}
   
export default Login;