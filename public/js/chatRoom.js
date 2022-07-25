const btn = document.getElementById('send-btn');
btn.addEventListener('click', addChat)
function addChat(e){
    let newP = document.createElement('p');
    const article = document.getElementById('chat');
    newP.innerText = document.getElementsByName('message')[0].value;
    article.appendChild(newP);
    document.getElementsByName('message')[0].value = ''
}