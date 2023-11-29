import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewFormPost from "../components/NewPostForm";

function  NewPost(){
    return(
        <>
            <Header/>
<NewFormPost />

<Footer/> 
        </>
    );
}

export default NewPost;