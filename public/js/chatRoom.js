const btn = document.getElementById('send-btn');
btn.addEventListener('click', addChat)
function addChat(e){
    let newP = document.createElement('p');
    const article = document.getElementById('chat');
    newP.innerText = document.getElementById('message').value;
    // newP.innerText = message;
    article.appendChild(newP);
    document.getElementById('message').value = ''
}