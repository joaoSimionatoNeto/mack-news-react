import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Comunidade from "../components/Comunidade";

function Communities(){
    return(
        <>
            <Header/>

<div className="container">
<Comunidade name="Teste 1" link={"https://google.com"}/>
<Comunidade name="Teste 2" link={"https://google.com"}/>
<Comunidade name="Teste 3" link={"https://google.com"}/>
<Comunidade  name="Teste 4" link={"https://google.com"}/>
</div>
<Footer/> 
        </>
    );
}

export default Communities;