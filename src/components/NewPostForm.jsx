import React from "react";
import "./NewPostForm.css";

function NewFormPost (){
    return(
    <div class="container">
        <form class="formPostagem" action="">
            <label for="comunidade">Comunidade</label>
            <select name="comunidade" class="formInput">
                <option value=""></option>
                <option value="option1">option 1</option>
                <option value="option2">option 2</option>
                <option value="option3">option 3</option>
            </select>

            <label for="conteudo">Conteúdo</label>
            <input type="text" name="conteudo" class="formInput"/>

            <label for="texto">Texto</label>
            <textarea name="texto" id="" cols="30" rows="10" class="formInput"></textarea>

            <input type="submit" value="POSTAR" class="formInput submit-button"/>
        </form>
    </div>
    );
}

export default NewFormPost;