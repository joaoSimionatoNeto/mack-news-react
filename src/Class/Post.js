
let posts = [];
function createPost(author, commuinity, content, text){
    let post = {
        "author": author,
        "commuinity": commuinity,
        "content": content,
        "text": text,
    }
    posts.push(post);
    return (post);
}

function getPostByCommunity(commuinity){
    return posts.find((obj) => obj.commuinity === commuinity);
}
